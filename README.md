# Using GitHub Copilot and Comparing It to Manual Coding

This coding experiment was conducted during the SOCIM course in the Digital Ideation program at Lucerne University of Applied Sciences. The objective was to demonstrate Copilot in action and assess its benefits for productivity and coding quality compared to manual coding without an AI assistant.

## Introduction

The project involved developing a simple binary search tree in JavaScript, starting from an old Java implementation of the tree. Since my experience with object-oriented programming in JavaScript was limited, the initial translation introduced several bugs. This scenario provided a perfect opportunity to test Copilot's debugging capabilities. The code is available in the corresponding branches.

The goals for this project included:
- Debugging
- Implementing simple algorithms (preorder, postorder)
- Learning a new framework
- Implementing unit tests

## Workspace Setup

Setting up the workspace with Copilot was as straightforward as using the prompt: `@workspace /new create a new node project with jest`. Copilot efficiently set up the base configuration in less than a minute, with Jest selected for unit testing.

![create-workspace](https://github.com/DerBeton/socim-fs24/assets/32222199/435fcaf2-98bb-44cf-ada7-6db7b23a6e43)

## Debugging
Running the following code threw the error: `RangeError: Maximum call stack size exceeded`.

```
let binaryTree = new BinaryTree();

binaryTree.add(1);
binaryTree.add(2);
binaryTree.add(3);
```

The base setup contained the following bugs:
- Function overloading: This technique was utilized in the Java project but is not supported in JavaScript.
- The `contains` method lacked a null check.

```
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

search(value) {
  return this.search(value, this.getRoot());
}
```

```
contains (value) {
  if(this search(value). value == value) {
    return true;
  }
  return false;
}
```


### Debugging without Copilot

Identifying and resolving the mentioned bugs took approximately 17 minutes. The error message provided was vague, which initially made it challenging to find the exact issue with function overloading. After renaming the `search` method to handle only one parameter, it became straightforward to address the issue in the `contains` method by adding a null check.

```
contains(value) {
  let found = this.find(value);

  if(found && found.value == value) {
      return true;
  }
  return false;
}
```

```
find(value) {
  return this.search(value, this.root);
}
```



### Debugging with Copilot
When using Copilot, you can highlight the problematic code and request a fix using the `/fix` command. In my first attempt, Copilot incorrectly tried to import the Node class, which was not applicable in this scenario.

![debugging-copilot-import](https://github.com/DerBeton/socim-fs24/assets/32222199/cca7defc-4299-4fe8-b728-41d66930276a)

For my second attempt, I highlighted only the `add` and both `search` functions, and asked Copilot to fix them without further instructions. Copilot correctly identified the issue of function overloading and provided an explanation:

![debugging-copilot-overloading](https://github.com/DerBeton/socim-fs24/assets/32222199/7ad05a2e-2b34-4b21-bc7e-379b74f4b00d)

Resolving this issue with Copilot's assistance took about 2 minutes. The next challenge was addressing the problem within the `contains` method. I managed to fix it easily by adding the null check as mentioned earlier. However, Copilot did not find a solution after multiple attempts using the `/fix` command, prompting me to provide further instructions and explain the issue in more detail:

![debugging-copilot-contains-search](https://github.com/DerBeton/socim-fs24/assets/32222199/3f9edfe5-c250-4671-8c7d-1703f65c839f)

In response, Copilot implemented its own `search` method within the `contains` method. This solution was not ideal since we already had a `search` method in our class. After clarifying the issue further and instructing it to utilize the existing `search` method, Copilot was able to give a functional solution.

```
contains(value) {
  const node = this.search(value);
  return node !== null && node.value === value;
}
```

Fixing the `contains` method with Copilot took about 10 minutes. Most of the time was used to explain the problem to Copilot in detail.

## Implement simple algorithm

### Implement without Copilot

Writing the code for the preorder algorithm took approximately three minutes. I was already familiar with the concepts of this algorithm from a previous Java project, which accelerated my implementation time. Otherwise, it likely would have taken longer to implement the algorithm.

![implement-preorder](https://github.com/DerBeton/socim-fs24/assets/32222199/da9d6041-db53-4b6f-8a91-ef48b336535c)


### Implement with Copilot

I deleted my code and restarted the IDE to clear its memory of my implementation. Then, I asked Copilot to implement the postorder algorithm. It functions similarly to the preorder algorithm but returns the elements in a different order.

![implement-postorder-copilot](https://github.com/DerBeton/socim-fs24/assets/32222199/f2c1e056-1cef-49e1-b2d2-2e058b613a6b)

Copilot implemented the algorithm instantly and without any issues.

## Learn Jest Framework

Jest is a JavaScript Testing Framework. I had never used it before and needed an introduction to its capabilities and usage. Normally, I would visit their website to read the documentation or watch a tutorial video. However, with Copilot, I was able to ask my questions directly within the chat window of the IDE, eliminating the need to navigate away. Copilot provided me with a straightforward introduction and guidance on how to use it for my current project.

![introduction-jest](https://github.com/DerBeton/socim-fs24/assets/32222199/c11e64b5-0616-4ad1-9bd9-32f1be0a64b3)

With this introduction, I was able to implement my first tests without any issues. Whenever something was unclear, I asked Copilot and received the correct responses. Here is another example:

![help-array-test](https://github.com/DerBeton/socim-fs24/assets/32222199/112b43ea-163d-46cf-8576-7fb98027457b)

## Implement Unit Tests

### Implement without Copilot

Implementing my own test cases after the introduction about the framework, took about 10 minutes. I created eight different test cases.

```
const BinaryTree = require('../src/index');

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
```

### Implement with Copilot

To create test cases using Copilot, I marked the code inside my index file and used the `/tests` command. Copilot automatically located my empty test file at `test/index.test.js` and added four different tests. However, Copilot did not include the correct file or import the BinaryTree. Asking it to do so didn't work. So I completed these steps manually.

```
const BinaryTree = require('../src/index');

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
```

### Unit Test Code coverage

Evaluating the extent of code coverage from my binary tree tests provides a good indicator of test quality. The first image displays the coverage from my own tests, and the second image shows Copilot's.

![own-test-coverage](https://github.com/DerBeton/socim-fs24/assets/32222199/8dec568e-d4ab-4b24-ac30-999fad87e564)

![test-coverage-copilot](https://github.com/DerBeton/socim-fs24/assets/32222199/ab3d7518-014f-4ca4-82d8-05c0e613b4e5)

Copilot generated fewer tests but included more cases within those tests. Additionally, its descriptions were more meaningful. The overall test coverage was comparable between the two methods, although Copilot did not verify whether `getRoot` returns `null` when the tree is empty.

**The grammar of the above text was improved using ChatGPT**
