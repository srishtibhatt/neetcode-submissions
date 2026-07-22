/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        if(head==null) return null;
        //step 1 -creating a copy of all elements 
        //without breaking the links with old one
        Node curr=head;
        while(curr!=null){
            Node newNode=new Node(curr.val);
            newNode.next=curr.next;
            curr.next=newNode;
            curr=newNode.next;
        }

        //step2- creating random pointer links for new nodes
        curr=head;
        while(curr!=null){
            if(curr.random!=null){
                curr.next.random=curr.random.next;
            }
            curr=curr.next.next;
        }
        //step3 - seperating the two lists
        curr=head;
        Node head2=head.next;
        while(curr!=null){
            Node newcurr=curr.next;
            curr.next=newcurr.next;
            if(newcurr.next!=null){
                newcurr.next=newcurr.next.next;
            }
            curr=curr.next;
        }

        return head2;
    }
}
