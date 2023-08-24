.PHONY: fmt
fmt:
	make -C client fmt
	make -C server fmt
	make -C static fmt
