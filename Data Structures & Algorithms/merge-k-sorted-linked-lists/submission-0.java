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
    public ListNode mergeKLists(ListNode[] lists) {
         if (lists == null || lists.length == 0) {
            return null;
        }
        return mergeKListHelper(lists,0,lists.length-1);
    }

    public ListNode mergeKListHelper(ListNode[] lists,int start,int end){
        if(start>end) return null;
        if(start==end) return lists[start];

        int mid=start+(end-start)/2;
        ListNode left=mergeKListHelper(lists,start,mid);
        ListNode right=mergeKListHelper(lists,mid+1,end);
        return merge2List(left,right);
    }
    public ListNode merge2List(ListNode l1,ListNode l2 ){
        ListNode dummy=new ListNode(0);
        ListNode tail=dummy;
        while(l1!=null && l2!=null){
            if(l1.val<l2.val){
                tail.next=l1;
                l1=l1.next;
            }else{
                tail.next=l2;
                l2=l2.next;
            }
            tail=tail.next;
            if(l1!=null){
                tail.next=l1;
            }
            if(l2!=null){
                tail.next=l2;
            }
        }
        return dummy.next;
    }
    }
