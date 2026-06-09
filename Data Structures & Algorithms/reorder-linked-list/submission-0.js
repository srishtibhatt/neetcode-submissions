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
     * @return {void}
     */
    reorderList(head) {

        if(head===null || head.next===null) return ;

        //finding middle element
        let slow=head;
        let fast=head;
        while(fast!==null && fast.next!==null){
            fast=fast.next.next;
            slow=slow.next;
        }

        //reversing the list
        let prev=null
        let curr=slow;
        while(curr){
            let nextPtr=curr.next;
            curr.next=prev;
            prev=curr;
            curr=nextPtr;
        }

        //merging
        let head2=prev;
        let head1 = head
        while(head2.next!==null){
            let temp= head1.next;
            head1.next=head2;
            head1=temp;
            
            temp=head2.next;
            head2.next=head1;
            head2=temp;
        }
    }
}
