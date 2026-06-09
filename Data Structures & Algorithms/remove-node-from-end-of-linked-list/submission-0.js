/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy=new ListNode(0,head);
        let first=dummy;
        let second=dummy;

        //moving ahead with second ptr
        for(let i=0;i<n;i++){
            second=second.next;
        }

        //till second ptr not points to null move ahead
        while(second.next!==null){
            first=first.next;
            second=second.next;
        }
        //removing the node from the list
        first.next=first.next.next;

        return dummy.next;
    }
}
