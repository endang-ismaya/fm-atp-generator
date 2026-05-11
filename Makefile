.PHONY: help serve open stop

PORT ?= 4173

help:
	@echo "Available commands:"
	@echo "  make serve  - Start local server on port $(PORT)"
	@echo "  make open   - Start server and open browser"
	@echo "  make stop   - Stop the running server"

serve:
	@echo "Starting server on http://localhost:$(PORT) ..."
	@python3 -m http.server $(PORT) &

open: serve
	@sleep 1 && open http://localhost:$(PORT)

stop:
	@pkill -f "python3 -m http.server $(PORT)" || echo "No server running on port $(PORT)"
