class SortingTemplate {
    constructor(container, content, onSuccess, onFail) {
        this.container = container;
        this.content = content;
        this.onSuccess = onSuccess;
        this.onFail = onFail;
        this.itemCount = content.items.length;
        this.placedCount = 0;
        this.render(); // Required by TaskRunner (see line 44)
    }

    render() {
        this.container.style.width = '100%';
        this.container.style.height = '100%'; // Full height again
        this.container.style.display = 'flex';
        this.container.style.flexDirection = 'column';
        this.container.style.justifyContent = 'space-between';
        this.container.style.boxSizing = 'border-box';

        // 1. Render Drop Zones (Bigger!)
        const zonesContainer = document.createElement('div');
        zonesContainer.className = 'sorting-zones';
        zonesContainer.style.display = 'flex';
        zonesContainer.style.justifyContent = 'center';
        zonesContainer.style.gap = '60px'; /* Bigger gap */
        zonesContainer.style.width = '100%';
        zonesContainer.style.marginTop = '40px';

        this.content.zones.forEach(zone => {
            const zoneEl = document.createElement('div');
            zoneEl.className = 'glass-panel drop-zone';
            zoneEl.dataset.id = zone.id;
            zoneEl.dataset.accept = JSON.stringify(zone.accept);

            zoneEl.innerHTML = `
                <div style="font-size: 5rem; margin-bottom: 24px;">${zone.icon}</div>
                <div style="font-weight: 800; font-size: 1.5rem; color: #4b5563;">${zone.label}</div>
            `;

            // Flex styles for zone
            zoneEl.style.width = '180px';
            zoneEl.style.height = '240px';
            zoneEl.style.display = 'flex';
            zoneEl.style.flexDirection = 'column';
            zoneEl.style.alignItems = 'center';
            zoneEl.style.justifyContent = 'center';
            zoneEl.style.transition = 'transform 0.2s, border 0.2s';
            zoneEl.style.background = 'white';
            zoneEl.style.border = '2px dashed #cbd5e1';
            zoneEl.style.borderRadius = '20px';

            this.enableDrop(zoneEl);
            zonesContainer.appendChild(zoneEl);
        });

        // 2. Render Draggable Items (Bigger!)
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'sorting-items';
        itemsContainer.style.display = 'flex';
        itemsContainer.style.gap = '40px';
        itemsContainer.style.justifyContent = 'center';
        itemsContainer.style.padding = '40px';
        itemsContainer.style.background = 'rgba(255,255,255,0.5)'; // Slight shelf background
        itemsContainer.style.borderRadius = '30px';
        itemsContainer.style.alignSelf = 'center';

        this.content.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'glass-button draggable-item pop-in';
            itemEl.draggable = true;
            itemEl.dataset.type = item.type;
            itemEl.innerHTML = item.content;
            itemEl.style.fontSize = '4rem'; /* Huge icons */
            itemEl.style.padding = '20px';
            itemEl.style.width = '100px';
            itemEl.style.height = '100px';
            itemEl.style.display = 'flex';
            itemEl.style.justifyContent = 'center';
            itemEl.style.alignItems = 'center';
            itemEl.style.cursor = 'grab';
            itemEl.style.background = 'white';
            itemEl.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            itemEl.style.borderRadius = '24px';

            this.enableDrag(itemEl);
            itemsContainer.appendChild(itemEl);
        });

        this.container.appendChild(zonesContainer);
        this.container.appendChild(itemsContainer);
    }

    enableDrag(el) {
        el.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', el.dataset.type);
            e.dataTransfer.effectAllowed = 'move';
            el.style.opacity = '0.4';
            // Store reference to current dragged element
            window.draggedElement = el;
        });

        el.addEventListener('dragend', (e) => {
            el.style.opacity = '1';
            window.draggedElement = null;
        });
    }

    enableDrop(zone) {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necessary to allow dropping
            e.dataTransfer.dropEffect = 'move';
            zone.style.transform = 'scale(1.05)';
            zone.style.borderColor = '#6366f1'; // Highlight color
            zone.style.background = '#eff6ff';
        });

        zone.addEventListener('dragleave', () => {
            zone.style.transform = 'scale(1)';
            zone.style.borderColor = '#cbd5e1';
            zone.style.background = 'white';
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.style.transform = 'scale(1)';
            zone.style.borderColor = '#cbd5e1';
            zone.style.background = 'white';

            const type = e.dataTransfer.getData('text/plain');
            const acceptedTypes = JSON.parse(zone.dataset.accept);

            if (acceptedTypes.includes(type)) {
                // Correct match
                this.handleCorrectDrop(zone);
            } else {
                // Incorrect
                this.onFail();
            }
        });
    }

    handleCorrectDrop(zone) {
        // Visual feedback for correctness
        const el = window.draggedElement;
        if (el) {
            el.remove(); // Remove from pool

            // Create a clone inside the zone to show it's "in"
            const clone = document.createElement('div');
            clone.innerHTML = el.innerHTML;
            clone.style.fontSize = '3rem';
            clone.classList.add('pop-in');
            zone.appendChild(clone);

            this.placedCount++;

            // Check win condition
            if (this.placedCount === this.itemCount) {
                this.onSuccess();
            }
        }
    }
}
