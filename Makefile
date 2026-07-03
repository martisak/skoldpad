KICAD_CLI ?= kicad-cli
PYTHON ?= python3

PCB := ergogen/kicad/skoldpad.kicad_pcb
IMAGES := images
LAYERS := F.Cu,F.SilkS,Edge.Cuts
ADD_BG := ergogen/kicad/svg_add_background.py

.PHONY: all schematics clean-schematics

all: schematics

schematics: $(IMAGES)/schematic-dark.svg $(IMAGES)/schematic-light.svg

$(IMAGES)/schematic-dark.svg: $(PCB) $(ADD_BG)
	tmp=$$(mktemp); \
	$(KICAD_CLI) pcb export svg -o $$tmp --layers "$(LAYERS)" --mode-single $(PCB); \
	$(PYTHON) $(ADD_BG) $$tmp $@ "#0D1117"; \
	rm -f $$tmp

$(IMAGES)/schematic-light.svg: $(PCB) $(ADD_BG)
	tmp=$$(mktemp); \
	$(KICAD_CLI) pcb export svg -o $$tmp --layers "$(LAYERS)" --mode-single $(PCB); \
	$(PYTHON) $(ADD_BG) $$tmp $@ "#FFFFFF"; \
	rm -f $$tmp

clean-schematics:
	rm -f $(IMAGES)/schematic-dark.svg $(IMAGES)/schematic-light.svg
