// This is the entry point of the Node.js application

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {

    constructor() {
        this.root = null;
    }

    add(value) {
        let newNode = new Node(value);

        if(this.root == null) {
            this.root = newNode;
        }

        let nodePosition = this.search(value, this.root)

        if(nodePosition == null) {
            nodePosition = newNode;
        }

        if(nodePosition.value == value) {
            return;
        }

        if(nodePosition.value > newNode.value) {
            nodePosition.left = newNode;
        } else if (nodePosition.value < newNode.value) {
            nodePosition.right = newNode;
        }
    }

    search(value, currNode) {
        let searchNode = new Node(value);

        if(currNode == null || currNode.value == searchNode.value) {
            return currNode;
        }

        if(currNode.value > searchNode.value) {
            if(currNode.left == null) {
                return currNode;
            }

            return this.search(value, currNode.left);

        } else if(currNode.value < searchNode.value) {
            if(currNode.right == null) {
                return currNode;
            }

            return this.search(value, currNode.right);
        }

        return currNode;
    }

    contains(value) {
        let found = this.find(value);

        if(found && found.value == value) {
            return true;
        }
        return false;
    }

    find(value) {
        return this.search(value, this.root);
    }

    // preorder algorithm
    preorder() {
        let preorderArray = [];

        const traversePreorder = (node) => {
            if(node != null) {
                preorderArray.push(node.value);
                traversePreorder(node.left);
                traversePreorder(node.right);
            }
        }

        traversePreorder(this.root);

        return preorderArray;
    }

}

module.exports = BinaryTree;