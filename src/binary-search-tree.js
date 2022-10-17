const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }
  root() {
    return this.base;
  }

  add(data) {
    this.base = addNode(this.base, data);

    function addNode(root, data) {
      if (!root) {
        return new Node(data);
      }
      if (root.data === data) {
        return root;
      }
      if (data < root.data) {
        root.left = addNode(root.left, data);
      } else {
        root.right = addNode(root.right, data);
      }
      return root;
    };
  }
  has(data) {
      return searchData(this.base, data);

      function searchData(node, data) {
        if(!node) {
          return false;
        }
        if(node.data === data) {
          return true;
        }
        if(node.data > data) {
          return searchData(node.left, data);
        } else {
          return  searchData(node.right, data);
        }
      }
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let node = this.base;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.base;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};