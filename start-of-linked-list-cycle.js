/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null) {
        return null;
    }
    
    let slow = head;
    let fast = head.next;
    let cycleNode = null;
    
    // First find ANY node in the cycle (where collision happens)
    while(slow !== null && fast !== null && fast.next !== null) {
        if(slow === fast) {
            cycleNode = slow;
            break;
        }
        
        slow = slow.next;
        fast = fast.next.next;
    }
    
    if(cycleNode === null) {
        return null;
    }
    
    // Find length of the cycle
    let runner = cycleNode;
    let cycleLength = 1;
    
    while(runner.next !== cycleNode) {
        cycleLength++;
        runner = runner.next;
    }
    
    // Move forward by cycleLength
    fast = head;
    for(let i = 0; i < cycleLength; i++) {
        fast = fast.next;
    }
    
    // Slow and fast are always cycleLength apart
    // Move forward by 1 at a time until pointers meet
    slow = head;
    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
};
