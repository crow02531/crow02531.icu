function apply_smiles(root) {
    const drawer = new SmilesDrawer.SvgDrawer({ scale: 1.3, experimental: true });
    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        {
            acceptNode(node) {
                return node.nodeName === 'SMILES' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
        }
    );

    let curNode = walker.firstChild();
    let content = [];

    while (curNode) {
        content.push(curNode);

        let oldNode = curNode;
        curNode = walker.nextNode();

        if (!curNode || curNode.previousElementSibling != oldNode) {
            let container = document.createElement('div');
            container.classList.add('smiles-container');

            for (node of content) {
                let item = document.createElement('div');
                item.classList.add('smiles-item');

                let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                SmilesDrawer.parse(node.getAttribute('data'), function (tree) {
                    drawer.draw(tree, svg);
                });

                item.appendChild(svg);
                while(node.childNodes.length != 0) {
                    item.appendChild(node.childNodes[0]);
                }

                container.appendChild(item);
            }

            content[0].parentNode.insertBefore(container, content[0]);

            for (node of content) {
                node.remove();
            }

            content = [];
        }
    }
}