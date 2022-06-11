/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var moveFast = function(slow) {
    if(slow != null && slow.next != null) {
        return slow.next.next;
    }
    
    return null;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    let slow = head;
    let fast = moveFast(slow);
    
    while(slow != null && fast != null) {
        if(slow === fast) {
            return true;
        }
        
        slow = slow.next;
        fast = moveFast(fast);
    }
    
    return false;
};
