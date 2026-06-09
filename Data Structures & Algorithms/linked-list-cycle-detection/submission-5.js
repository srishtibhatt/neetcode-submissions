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
     * @return {boolean}
     */
    hasCycle(head) {
        let fastPtr= head;
        let slowPtr = head;

        while(fastPtr!==null && fastPtr.next!==null && slowPtr!==null){
            fastPtr=fastPtr.next.next;
            slowPtr=slowPtr.next;
            if(fastPtr===slowPtr){
                return true;
            }
        }
        return false;
    }
}
