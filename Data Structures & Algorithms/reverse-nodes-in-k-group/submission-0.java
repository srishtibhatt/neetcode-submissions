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
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode ptr=head;
        int cnt=0;
        while(ptr!=null && cnt<k){
            ptr=ptr.next;
            cnt++;
        }
        if (cnt < k) {
            return head;
        }
        ListNode prev=reverseKGroup(ptr,k);
        
        while(cnt-- >0){
            ListNode next=head.next;
            head.next=prev;
            prev=head;
            head=next;
        }
        return prev;
    }
}
