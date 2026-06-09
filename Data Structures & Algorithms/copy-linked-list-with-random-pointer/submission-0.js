// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(head===null) return null;

    let curr=head;
        //step 1 -creating a copy of all elements without breaking the links with old one
    while(curr!==null){
        let newNode=new Node(curr.val);
        newNode.next=curr.next;
        curr.next=newNode;
        curr=newNode.next;
       }

        //step 2 - creating randome pointer links now for new nodes
    curr=head;
    while(curr!==null){
        if(curr.random!==null)
            curr.next.random=curr.random.next;
        curr=curr.next.next;
    }

        //step3 - seperating the two lists
    curr=head;
    let head2=head.next;
    let newCurr=curr.next;

    while(curr!==null){
        curr.next=newCurr.next;
        curr=curr.next;
    if(curr!==null){
        newCurr.next=curr.next;
        newCurr=newCurr.next;
        }
    }

    return head2;
    }
}
