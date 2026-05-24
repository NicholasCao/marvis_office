import http.server
import os
import sys

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class LoggingHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = http.server.SimpleHTTPRequestHandler.extensions_map.copy()
    extensions_map.update({
        '.tmj': 'application/json',
        '.tsj': 'application/json',
        '.webp': 'image/webp',
        '.ktx2': 'image/ktx2',
        '.wasm': 'application/wasm',
    })

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def log_message(self, format, *args):
        msg = format % args
        sys.stderr.write(msg + '\n')
        sys.stderr.flush()
        with open('server.log', 'a') as f:
            f.write(msg + '\n')

server = http.server.HTTPServer(('', 5175), LoggingHandler)
print("Serving dashboard_v3 on http://localhost:5175/")
server.serve_forever()
