const comments = [
  {
    id: 1,
    content: "This recipe is so good!",
    parentId: 1,
    replyId: null,
    time: "1 day go",
    likes: "4K",
    dislikes: "",
    name: "adeahi",
  },
  {
    id: 2,
    content: "I tried it and it is absolutely wonderful",
    parentId: 3,
    replyId: 1,
    time: "2 hours ago",
    likes: "351K",
    dislikes: "",
    name: "johnson",
  },
  {
    id: 3,
    content: "I agree, it was wonderful!",
    parentId: 3,
    replyId: 1,
    time: "55 minutes ago",
    likes: "12",
    dislikes: "",
    name: "william",
  },
  {
    id: 4,
    content: "The most amazing thing about this recipe is how simeple it is",
    parentId: 4,
    replyId: null,
    time: "",
    likes: "2K",
    dislikes: "",
    name: "briskoman",
  },
  {
    id: 5,
    content: "Wow, I guess this might become my daiy breakfast",
    parentId: 5,
    replyId: 4,
    time: "30 minutes ago",
    likes: "12",
    dislikes: "",
    name: "wealthfamily",
  },
  {
    id: 6,
    content: "Make sure you follow the steps oh!",
    parentId: 6,
    replyId: 5,
    time: "12 minutes ago",
    likes: "",
    dislikes: "5",
    name: "greatPeople",
  },
  {
    id: 7,
    content: "Are you for real bro?!",
    parentId: 7,
    replyId: 6,
    time: "",
    likes: "",
    dislikes: "",
    name: "",
  },
];

export { comments };
