# from flask import Flask, request, send_file
# from rembg import remove
# from PIL import Image
# import io
# import os

# app = Flask(__name__)

# @app.route('/remove-bg', methods=['POST'])
# def remove_bg():
#     if 'image' not in request.files:
#         return "No image part", 400

#     image_file = request.files['image']
#     image = Image.open(image_file.stream)

#     # Remove background
#     output_image = remove(image)

#     # Save to buffer
#     buf = io.BytesIO()
#     output_image.save(buf, format="PNG")
#     buf.seek(0)

#     return send_file(buf, mimetype='image/png')

# if __name__ == '__main__':
#     app.run(port=5001)
# from flask import Flask, request, send_file
# from rembg import remove, new_session
# from PIL import Image
# import io

# app = Flask(__name__)

# # Use session for optimized performance (you can switch model if needed)
# session = new_session("u2net")  # Options: u2net, u2netp, u2net_human_seg

# @app.route('/remove-bg', methods=['POST'])
# def remove_bg():
#     if 'image' not in request.files:
#         return "No image part", 400

#     image_file = request.files['image']
#     try:
#         image = Image.open(image_file.stream).convert("RGBA")
#     except Exception as e:
#         return f"Invalid image: {str(e)}", 400

#     # Remove background using session
#     output_image = remove(image, session=session)

#     # Save to buffer with quality settings
#     buf = io.BytesIO()
#     dpi = image.info.get("dpi", (72, 72))  # preserve DPI if available
#     output_image.save(buf, format="PNG", optimize=True, compress_level=1, dpi=dpi)
#     buf.seek(0)

#     return send_file(buf, mimetype='image/png')

# if __name__ == '__main__':
#     app.run(port=5001, debug=False)

# from flask import Flask, request, send_file
# from rembg import remove, new_session
# from PIL import Image
# import io
# from transparent_background import TransparentBackground

# app = Flask(__name__)

# # Prepare Rembg session and InSPyReNet instance
# rembg_session = new_session("u2net")
# tb = TransparentBackground()

# @app.route('/remove-bg', methods=['POST'])
# def remove_bg():
#     if 'image' not in request.files:
#         return "No image part", 400

#     engine = request.args.get("engine", "rembg")  # default to rembg
#     image_file = request.files['image']

#     try:
#         image = Image.open(image_file.stream).convert("RGBA")
#     except Exception as e:
#         return f"Invalid image: {str(e)}", 400

#     try:
#         if engine == "inspyrenet":
#             output_image = tb.remove(image)
#         else:
#             output_image = remove(image, session=rembg_session)
#     except Exception as e:
#         return f"Background removal failed: {str(e)}", 500

#     buf = io.BytesIO()
#     dpi = image.info.get("dpi", (72, 72))
#     output_image.save(buf, format="PNG", optimize=True, compress_level=1, dpi=dpi)
#     buf.seek(0)

#     return send_file(buf, mimetype='image/png')

# if __name__ == '__main__':
#     app.run(port=5001, debug=False)

from flask import Flask, request, send_file
from rembg import remove
from PIL import Image, ImageEnhance, ImageFilter
import io
import os
from flask_cors import CORS


port = int(os.environ.get("PORT", 5000))  # use env PORT or default 5000


# Set better model
os.environ["U2NET_MODEL_NAME"] = "isnet-general-use"

app = Flask(__name__)
app = Flask(__name__)
CORS(app, origins=["https://removebg-ten-sooty.vercel.app"])

@app.route('/remove-bg', methods=['POST'])
def remove_bg():
    try:
        print("📥 Incoming files:", request.files)
        print("📥 Incoming form:", request.form)

        if 'image' not in request.files:
            print("❌ No image uploaded")
            return {'error': 'No image uploaded'}, 400

        image_file = request.files['image']
        print(f"📤 Received image: {image_file.filename}")

        # ✅ Open the image
        input_image = Image.open(image_file.stream)

        # ✅ Background removal
        output = remove(input_image)
        # input_image = Image.open(image_file.stream)
        print("🔄 Processing with isnet-general-use model...")

        output = remove(input_image)

        img_byte_arr = io.BytesIO()
        output.save(img_byte_arr, format='PNG')
        img_byte_arr.seek(0)

        print("✅ Background removal completed.")
        return send_file(img_byte_arr, mimetype='image/png')

    except Exception as e:
        print(f"⚠️ Error: {str(e)}")
        return {'error': 'Internal server error'}, 500
if __name__ == '__main__':
    # app.run(port=5001, debug=True)
    app.run(host="0.0.0.0", port=port)


# .\venv\Scripts\activate  - activate virtul enviroment
