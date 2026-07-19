/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public void reorderList(ListNode head) {
        //finding middle element
        ListNode fast=head;
        ListNode slow=head;
        while(fast!=null && fast.next!=null){
            fast=fast.next.next;
            slow=slow.next;
        }
        //reversing
        ListNode prev=null;
        ListNode curr=slow;
        while(curr!=null){
            ListNode nextPtr=curr.next;
            curr.next=prev;
            prev=curr;
            curr=nextPtr;
        }
        //merging
        ListNode head2=prev;
        ListNode head1=head;
        while(head2.next!=null){
            ListNode temp=head1.next;
            head1.next=head2;
            head1=temp;

            temp=head2.next;
            head2.next=head1;
            head2=temp;
        }
    }
}
