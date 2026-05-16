#!/usr/bin/env python3
import os, sys, http.server, socketserver

DIRECTORY = "/Users/fabimatas/Desktop/MAT-site"
port = int(sys.argv[1]) if len(sys.argv) > 1 else 3456

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    def log_message(self, fmt, *args):
        pass

os.chdir(DIRECTORY)
with socketserver.TCPServer(("", port), Handler) as httpd:
    httpd.serve_forever()
