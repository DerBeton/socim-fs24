const BinaryTree = require('../src/index-copilot');

describe('BinaryTree', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  it('should add nodes correctly', () => {
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(7);
    binaryTree.add(2);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(8);

    expect(binaryTree.getRoot().value).toBe(5);
    expect(binaryTree.getRoot().left.value).toBe(3);
    expect(binaryTree.getRoot().right.value).toBe(7);
    expect(binaryTree.getRoot().left.left.value).toBe(2);
    expect(binaryTree.getRoot().left.right.value).toBe(4);
    expect(binaryTree.getRoot().right.left.value).toBe(6);
    expect(binaryTree.getRoot().right.right.value).toBe(8);
  });

  it('should return true if a node with the given value exists', () => {
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(7);

    expect(binaryTree.contains(5)).toBe(true);
    expect(binaryTree.contains(3)).toBe(true);
    expect(binaryTree.contains(7)).toBe(true);
    expect(binaryTree.contains(2)).toBe(false);
    expect(binaryTree.contains(4)).toBe(false);
    expect(binaryTree.contains(6)).toBe(false);
    expect(binaryTree.contains(8)).toBe(false);
  });

  it('should return the nodes in preorder traversal', () => {
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(7);
    binaryTree.add(2);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(8);

    expect(binaryTree.preorder()).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  it('should return the nodes in postorder traversal', () => {
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(7);
    binaryTree.add(2);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(8);

    expect(binaryTree.postorder()).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });
});