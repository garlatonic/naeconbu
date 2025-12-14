import { Card, CardContent, CardTitle } from "@/components/ui/card";
import PosterBox from "@/components/review/post/PosterBox";
import {
  Clock4,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Link2,
  MoreHorizontalIcon,
  Twitter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { SortSelect } from "@/components/common/SortSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import Link from "next/link";
import { cn } from "@/lib/utils";

const mockRelatedPosts = [
  {
    id: 1,
    title: "Best Seats at Olympic Park: A Complete Guide",
    author: "Park Seo-jun",
    date: "March 12, 2025",
  },
  {
    id: 2,
    title: "How to Enjoy Standing Seats Without Stress",
    author: "Kim Min-jae",
    date: "March 10, 2025",
  },
  {
    id: 3,
    title: "Concert Etiquette Every Fan Should Know",
    author: "Lee Soo-jin",
    date: "March 8, 2025",
  },
];

const mockComments = [
  {
    id: 1,
    author: "Lee Min-ho",
    avatar: "https://github.com/shadcn.png",
    content:
      "This concert was absolutely unforgettable. The sound quality and crowd energy were amazing!",
    createdAt: "2 hours ago",
    likes: 12,
  },
  {
    id: 2,
    author: "Kim Ji-eun",
    avatar: "https://github.com/shadcn.png",
    content:
      "I followed the seating tips from this review and it really helped. Thanks for sharing!",
    createdAt: "5 hours ago",
    likes: 8,
  },
  {
    id: 3,
    author: "Park Seo-joon",
    avatar: "https://github.com/shadcn.png",
    content: "Standing A was intense but worth it. Bring earplugs if you're sensitive to sound.",
    createdAt: "1 day ago",
    likes: 21,
  },
];

export default function ReviewPostMain() {
  return (
    <section className={"px-15 py-16"}>
      <div className="mx-auto flex w-full max-w-400 gap-12">
        {/*왼쪽 파트*/}
        <section className={"flex w-full flex-col gap-8"}>
          <Card className={"p-6"}>
            <div className={"flex gap-6"}>
              <PosterBox />
              <CardContent className={"flex flex-1 flex-col gap-2"}>
                <p className={"text-text-sub"}>Concert Review</p>
                <CardTitle className={"text-xl"}>
                  IU 2025 World Tour: The Golden Hour in Seoul
                </CardTitle>
                <div className={"flex flex-col gap-4"}>
                  <div className={"flex justify-between gap-4"}>
                    <div className={"flex flex-1 flex-col gap-1"}>
                      <span className={"text-text-sub"}>Date</span>
                      <p>March 15, 2025</p>
                    </div>
                    <div className={"flex flex-1 flex-col gap-1"}>
                      <span className={"text-text-sub"}>Venue</span>
                      <p>Olympic Gymnastics Arena</p>
                    </div>
                  </div>
                  <div className={"flex justify-between gap-4"}>
                    <div className={"flex flex-1 flex-col gap-1"}>
                      <span className={"text-text-sub"}>Time</span>
                      <p>7:00 PM</p>
                    </div>
                    <div className={"flex flex-1 flex-col gap-1"}>
                      <span className={"text-text-sub"}>Section</span>
                      <p>Standing A</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          <header className={"flex flex-col gap-4"}>
            <h1 className={"text-4xl"}>
              Essential Tips for First-Time Concert Goers at Olympic Park
            </h1>
            <div className={"flex justify-between"}>
              <div className={"flex gap-6"}>
                <div className={"text-text-sub flex gap-6"}>
                  <div className={"flex items-center gap-2"}>
                    <Clock4 size={14} />
                    <p>March 15, 2025</p>
                  </div>
                  <div className={"flex items-center gap-2"}>
                    <Eye size={14} />
                    <p>1,247</p>
                  </div>
                </div>
              </div>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-text-sub cursor-pointer hover:bg-transparent"
                    aria-label="More options"
                  >
                    <MoreHorizontalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                  <DropdownMenuLabel>File Actions</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>New File...</DropdownMenuItem>
                    <DropdownMenuItem>Share...</DropdownMenuItem>
                    <DropdownMenuItem disabled>Download</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <Separator />

          <div>
            <p className={"mb-4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, autem
              consectetur consequatur culpa, debitis eius exercitationem fuga fugiat hic impedit
              incidunt, minus natus possimus provident quas sequi similique sint.
            </p>
            <span className={"text-base"}>Setlist Highlights</span>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus expedita,
              molestiae. Aut eaque et fugit incidunt necessitatibus obcaecati possimus quisquam,
              repellat veniam. Ad cumque iste itaque pariatur quidem sit vel. top.
            </p>
            <br />
            <div className={"flex h-100 items-center justify-center bg-gray-300"}>
              <span className={"text-text-sub"}>Concert Stage Photo</span>
            </div>
          </div>

          <Separator />
          <div>
            <Button variant={"outline"}>
              <Heart /> 124
            </Button>
          </div>

          <Separator />

          <div className={"flex flex-col gap-6"}>
            <div className={"flex justify-between"}>
              <h3 className={"text-xl font-bold"}>Comments (38)</h3>
              <SortSelect />
            </div>
            <div className={"flex gap-4"}>
              <Avatar className={"h-10 w-10"}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className={"flex flex-1 flex-col gap-3"}>
                <Textarea
                  placeholder={"Share your thoughts or ask a question..."}
                  className={"h-24 resize-none"}
                />
                <div className={"flex justify-between"}>
                  <span className={"text-text-sub text-sm"}>Be respectful and constructive</span>
                  <Button size={"lg"}>Post Comment</Button>
                </div>
              </div>
            </div>

            <Separator />

            {mockComments.map((comment, index) => {
              const isLast = index === mockComments.length - 1;

              return (
                <Item key={comment.id} className="p-0">
                  <ItemContent className={cn(!isLast && "border-border border-b pb-6")}>
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={comment.avatar} alt={comment.author} />
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className={"flex items-center gap-4"}>
                            <span>{comment.author}</span>
                            <span className={"text-text-sub text-xs"}>{comment.createdAt}</span>
                          </div>

                          <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon-sm"
                                className="text-text-sub hover:bg-transparent"
                                aria-label="More options"
                              >
                                <MoreHorizontalIcon />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="end">
                              <DropdownMenuItem>Report</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <p>{comment.content}</p>

                        <div className="text-text-sub flex items-center gap-1 text-xs">
                          <Heart size={12} />
                          {comment.likes}
                        </div>
                      </div>
                    </div>
                  </ItemContent>
                </Item>
              );
            })}

            <div className={"flex justify-center"}>
              <Button variant={"outline"} size={"lg"}>
                Load More Comments
              </Button>
            </div>
          </div>
        </section>
        {/*오른쪽 파트*/}
        <div className={"sticky top-34 flex w-125 shrink-0 flex-col gap-12 self-start"}>
          <Card className={"flex flex-col gap-4 p-6"}>
            <CardTitle>About the Author</CardTitle>
            <div className={"flex gap-4"}>
              <Avatar className={"h-16 w-16"}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className={"flex flex-col justify-center gap-2"}>
                <span>Kim Ji-soo</span>
                <div className={"text-text-sub flex gap-1 text-xs"}>
                  <span>127 posts</span>
                  <span>·</span>
                  <span>2.4k followers</span>
                </div>
              </div>
            </div>
            <CardContent className="text-text-sub px-0">
              {
                "Music lover and concert regular. I've attended over 200 live shows across Korea and love sharing tips with fellow concert-goers."
              }
            </CardContent>
          </Card>

          <Card className={"flex flex-col gap-4 p-6"}>
            <CardTitle className={"text-lg"}>Related Posts</CardTitle>
            {mockRelatedPosts.map((post, index) => {
              const isLast = index === mockRelatedPosts.length - 1;

              return (
                // TODO: 호버 시 패딩까지 호버가 적용되는거 수정하기
                <Item
                  key={post.id}
                  className="p-0 hover:bg-transparent focus:bg-transparent"
                  asChild
                >
                  <Link href={`/review/${post.id}`} className="block">
                    <ItemContent className={cn(!isLast && "border-border border-b pb-4")}>
                      <ItemTitle className="font-normal">{post.title}</ItemTitle>

                      <div className="text-text-sub flex gap-3 text-sm">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </ItemContent>
                  </Link>
                </Item>
              );
            })}
          </Card>
          <Card className={"flex flex-col gap-4 p-6"}>
            <CardTitle>Share This Post</CardTitle>
            <div className={"flex flex-col gap-1.5"}>
              <div className={"flex gap-1.5"}>
                <Button variant={"outline"} size={"lg"} className={"flex-1"}>
                  <Twitter /> Twitter
                </Button>
                <Button variant={"outline"} size={"lg"} className={"flex-1"}>
                  <Facebook /> Facebook
                </Button>
              </div>
              <div className={"flex gap-1.5"}>
                <Button variant={"outline"} size={"lg"} className={"flex-1"}>
                  <Instagram /> Instagram
                </Button>
                <Button variant={"outline"} size={"lg"} className={"flex-1"}>
                  <Link2 /> Copy Link
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
