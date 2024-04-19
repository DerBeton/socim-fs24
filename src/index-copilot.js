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

    getRoot() {
        return this.root;
    }

    // fixed code quite fast
    add(value) {
        let newNode = new Node(value);

        if(this.root == null) {
            this.root = newNode;
            return;
        }

        let nodePosition = this.searchNode(value, this.root);

        if(nodePosition.value == value) {
            return;
        }

        if(nodePosition.value > newNode.value) {
            nodePosition.left = newNode;
        } else if (nodePosition.value < newNode.value) {
            nodePosition.right = newNode;
        }
    }

    searchNode(value, currNode) {
        let searchValue = new Node(value);

        if(currNode == null || currNode.value == searchValue.value) {
            return currNode;
        }

        if(currNode.value > searchValue.value) {
            if(currNode.left == null) {
                return currNode;
            }

            return this.searchNode(value, currNode.left);
        } else if(currNode.value < searchValue.value) {
            if(currNode.right == null) {
                return currNode;
            }

            return this.searchNode(value, currNode.right);
        }

        return currNode;
    }

    search(value) {
        return this.searchNode(value, this.getRoot());
    }

    // had to be specific with the problem
    contains(value) {
        const node = this.search(value);
        return node !== null && node.value === value;
    }

    // implement preorder algorithm
    preorder() {
        let preorderArray = [];

        const traversePreorder = (node) => {
            if(node != null) {
                preorderArray.push(node.value);
                traversePreorder(node.left);
                traversePreorder(node.right);
            }
        }

        traversePreorder(this.getRoot());

        return preorderArray;
    }

    postorder() {
        let result = [];
        this.postorderTraversal(this.getRoot(), result);
        return result;
    }

    postorderTraversal(node, result) {
        if (node !== null) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.value);
        }
    }

}

module.exports = BinaryTree;