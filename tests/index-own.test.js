const BinaryTree = require('../src/index-copilot');

test('contains true', () => {
  const bt = new BinaryTree();

  bt.add(10);
  bt.add(9);
  bt.add(11);

  expect(bt.contains(10)).toBe(true);
});

test('duplicate values not allowed', () => {
  const bt = new BinaryTree();

  bt.add(10);
  bt.add(9);
  bt.add(9);

  expect(bt.preorder()).toEqual([10, 9]);
});

test('empty tree', () => {
  const bt = new BinaryTree();

  expect(bt.root).toBeNull();
})

test('preorder', () => {
  const bt = new BinaryTree();

  bt.add(5);
  bt.add(2);
  bt.add(6);
  bt.add(8);
  bt.add(10);
  bt.add(3);

  expect(bt.preorder()).toEqual([5, 2, 3, 6, 8, 10]);
})

test('postorder', () => {
  const bt = new BinaryTree();

  bt.add(5);
  bt.add(2);
  bt.add(6);
  bt.add(8);
  bt.add(10);
  bt.add(3);

  expect(bt.postorder()).toEqual([3, 2, 10, 8, 6, 5]);
})

test('getRoot', () => {
  const bt = new BinaryTree();

  bt.add(4);

  expect(bt.getRoot().value).toBe(4);
})

test('search 8 found', () => {
  const bt = new BinaryTree();

  bt.add(5);
  bt.add(2);
  bt.add(6);
  bt.add(8);
  bt.add(10);
  bt.add(3);

  expect(bt.search(8).value).toBe(8);
})

test('search 8 not found', () => {
  const bt = new BinaryTree();

  bt.add(5);
  bt.add(2);
  bt.add(6);
  bt.add(10);
  bt.add(3);

  expect(bt.search(8).value).not.toBe(8);
})