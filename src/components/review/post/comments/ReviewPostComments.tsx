import CommentInput from "@/components/review/post/comments/CommentInput";
import CommentItem from "@/components/review/post/comments/CommentItem";

export default function ReviewPostComments() {
  return (
    <div className={"flex flex-col gap-6"}>
      <CommentInput />
      <CommentItem />
    </div>
  );
}
