import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Contributor = {
  __typename?: 'Contributor';
  _id?: Maybe<Scalars['ID']>;
  stamp?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CreatePostOutput = MutationOutput & {
  __typename?: 'CreatePostOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  post?: Maybe<PostDetailed>;
  success: Scalars['Boolean'];
};

export type CreateStoryInput = {
  contentMarkdown: Scalars['String'];
  coverImageURL?: InputMaybe<Scalars['String']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  isRepublished?: InputMaybe<IsRepublished>;
  publishAs?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sourcedFromGithub?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags: Array<InputMaybe<TagsInput>>;
  title: Scalars['String'];
};

export type DeleteOutput = MutationOutput & {
  __typename?: 'DeleteOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum FeedType {
  Best = 'BEST',
  Community = 'COMMUNITY',
  Featured = 'FEATURED',
  New = 'NEW'
}

export type FollowUserOutput = MutationOutput & {
  __typename?: 'FollowUserOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Links = {
  __typename?: 'Links';
  github?: Maybe<Scalars['String']>;
  hashnode?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPublicationStory: CreatePostOutput;
  createReply: CreateReplyOutput;
  createResponse: CreateResponseOutput;
  createStory: CreatePostOutput;
  deletePost: DeleteOutput;
  deleteReply: DeleteOutput;
  deleteResponse: DeleteOutput;
  followUser: FollowUserOutput;
  reactToReply: ReactToReplyOutput;
  reactToResponse: ReactToResponseOutput;
  reactToStory: ReactToPostOutput;
  updateReply: CreateReplyOutput;
  updateResponse: CreateResponseOutput;
  updateStory: CreatePostOutput;
};


export type MutationCreatePublicationStoryArgs = {
  hideFromHashnodeFeed?: InputMaybe<Scalars['Boolean']>;
  input: CreateStoryInput;
  publicationId: Scalars['String'];
};


export type MutationCreateReplyArgs = {
  input: CreateReplyInput;
};


export type MutationCreateResponseArgs = {
  input: CreateResponseInput;
};


export type MutationCreateStoryArgs = {
  input: CreateStoryInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationDeleteReplyArgs = {
  postId: Scalars['String'];
  replyId: Scalars['String'];
  responseId: Scalars['String'];
};


export type MutationDeleteResponseArgs = {
  postId: Scalars['String'];
  responseId: Scalars['String'];
};


export type MutationFollowUserArgs = {
  userId: Scalars['String'];
};


export type MutationReactToReplyArgs = {
  input: ReactToReplyInput;
};


export type MutationReactToResponseArgs = {
  input: ReactToResponseInput;
};


export type MutationReactToStoryArgs = {
  input: ReactToPostInput;
};


export type MutationUpdateReplyArgs = {
  contentInMarkdown: Scalars['String'];
  postId: Scalars['String'];
  replyId: Scalars['String'];
  responseId: Scalars['String'];
};


export type MutationUpdateResponseArgs = {
  contentInMarkdown: Scalars['String'];
  postId?: InputMaybe<Scalars['String']>;
  responseId: Scalars['String'];
};


export type MutationUpdateStoryArgs = {
  input: UpdateStoryInput;
  postId: Scalars['String'];
};

export type MutationOutput = {
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Poll = {
  __typename?: 'Poll';
  pollClosingDate?: Maybe<Scalars['String']>;
  pollOptions?: Maybe<Array<Maybe<PollOption>>>;
  pollRunningTime?: Maybe<Scalars['String']>;
  totalVotes?: Maybe<Scalars['Int']>;
};

export type PollOption = {
  __typename?: 'PollOption';
  _id: Scalars['ID'];
  option: Scalars['String'];
  votes: Scalars['Int'];
};

export type PollOptionInput = {
  content: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID'];
  author?: Maybe<User>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  brief?: Maybe<Scalars['String']>;
  contentMarkdown?: Maybe<Scalars['String']>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  coverImage: Scalars['String'];
  cuid?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['String']>;
  dateFeatured?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  followersCount?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  numUniqueUsersWhoReacted?: Maybe<Scalars['Int']>;
  partOfPublication?: Maybe<Scalars['Boolean']>;
  poll?: Maybe<Poll>;
  popularity?: Maybe<Scalars['Float']>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  replyCount?: Maybe<Scalars['Int']>;
  responseCount?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  totalReactions?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type PostDetailed = {
  __typename?: 'PostDetailed';
  _id: Scalars['ID'];
  author?: Maybe<User>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  brief?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentMarkdown?: Maybe<Scalars['String']>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  coverImage?: Maybe<Scalars['String']>;
  cuid?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  followersCount?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  isDelisted?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isRepublished?: Maybe<Scalars['Boolean']>;
  numCollapsed?: Maybe<Scalars['Int']>;
  partOfPublication?: Maybe<Scalars['Boolean']>;
  poll?: Maybe<Poll>;
  popularity?: Maybe<Scalars['Float']>;
  publication?: Maybe<Publication>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  replyCount?: Maybe<Scalars['Int']>;
  responseCount?: Maybe<Scalars['Int']>;
  responses: Array<Response>;
  slug?: Maybe<Scalars['String']>;
  sourcedFromGithub?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  totalReactions?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  untaggedFrom?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type PostDetailedResponsesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type Publication = {
  __typename?: 'Publication';
  _id: Scalars['ID'];
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayTitle?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  embedCode?: Maybe<Scalars['String']>;
  favicon?: Maybe<Scalars['String']>;
  fbPixelID?: Maybe<Scalars['String']>;
  gaTrackingID?: Maybe<Scalars['String']>;
  headerColor?: Maybe<Scalars['String']>;
  imprint?: Maybe<Scalars['String']>;
  imprintMarkdown?: Maybe<Scalars['String']>;
  isAMPEnabled?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  layout?: Maybe<Scalars['String']>;
  links?: Maybe<Links>;
  logo?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['String']>;
  metaHTML?: Maybe<Scalars['String']>;
  metaTags?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  sitemapSubmitted?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  tweetedAboutBlog?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};


export type PublicationPostsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type PublicationDetails = {
  publicationId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  amas?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<PostDetailed>;
  storiesFeed?: Maybe<Array<Maybe<Post>>>;
  tagCategories?: Maybe<Array<Maybe<TagCategory>>>;
  user?: Maybe<User>;
};


export type QueryAmasArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  hostname?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
};


export type QueryStoriesFeedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  type: FeedType;
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type ReactToPostInput = {
  postId: Scalars['String'];
  reaction: ReactionName;
};

export type ReactToPostOutput = MutationOutput & {
  __typename?: 'ReactToPostOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type ReactToReplyInput = {
  postId: Scalars['String'];
  reaction: ReactionName;
  replyId: Scalars['String'];
  responseId: Scalars['String'];
};

export type ReactToReplyOutput = MutationOutput & {
  __typename?: 'ReactToReplyOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type ReactToResponseInput = {
  postId: Scalars['String'];
  reaction: ReactionName;
  responseId: Scalars['String'];
};

export type ReactToResponseOutput = MutationOutput & {
  __typename?: 'ReactToResponseOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Reaction = {
  __typename?: 'Reaction';
  image: Scalars['String'];
  name: ReactionName;
};

export enum ReactionName {
  Beer = 'BEER',
  Clap = 'CLAP',
  HeartEyes = 'HEART_EYES',
  Love = 'LOVE',
  Party = 'PARTY',
  Rocket = 'ROCKET',
  TakeMyMoney = 'TAKE_MY_MONEY',
  ThumbsUp = 'THUMBS_UP',
  Trophy = 'TROPHY',
  Unicorn = 'UNICORN'
}

export type ReactionsAndCount = {
  __typename?: 'ReactionsAndCount';
  count: Scalars['Int'];
  reaction: Reaction;
};

export type Reply = {
  __typename?: 'Reply';
  _id: Scalars['ID'];
  author: User;
  content: Scalars['String'];
  contentMarkdown: Scalars['String'];
  dateAdded: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  stamp?: Maybe<Scalars['String']>;
  totalReactions?: Maybe<Scalars['Int']>;
};

export type Response = {
  __typename?: 'Response';
  _id: Scalars['ID'];
  author?: Maybe<User>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  content?: Maybe<Scalars['String']>;
  contentMarkdown?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isCollapsed?: Maybe<Scalars['Boolean']>;
  popularity?: Maybe<Scalars['Float']>;
  post?: Maybe<Scalars['String']>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  replies?: Maybe<Array<Maybe<Reply>>>;
  stamp?: Maybe<Scalars['String']>;
  totalReactions?: Maybe<Scalars['Int']>;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  stackoverflow?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  _id: Scalars['ID'];
  contributors?: Maybe<TagContributors>;
  followersCount?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  leaderboard?: Maybe<TagLeaderBoard>;
  logo?: Maybe<Scalars['String']>;
  managers?: Maybe<Array<Maybe<TagManager>>>;
  name?: Maybe<Scalars['String']>;
  numPosts?: Maybe<Scalars['Int']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  slug?: Maybe<Scalars['String']>;
  socialMedia?: Maybe<TagSocialMedia>;
  stats?: Maybe<TagStats>;
  tagline?: Maybe<Scalars['String']>;
  wiki?: Maybe<Scalars['String']>;
  wikiMarkdown?: Maybe<Scalars['String']>;
};


export type TagPostsArgs = {
  filter: TagsPostFilter;
  page?: InputMaybe<Scalars['Int']>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  _id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type TagContributorLeaders = {
  __typename?: 'TagContributorLeaders';
  allTimeTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
  monthlyTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
};

export type TagContributors = {
  __typename?: 'TagContributors';
  leaders?: Maybe<TagContributorLeaders>;
  managers?: Maybe<Array<Maybe<TagManager>>>;
};

export type TagLeaderBoard = {
  __typename?: 'TagLeaderBoard';
  allTimeTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
  monthlyTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
};

export type TagLeaderBoardMember = {
  __typename?: 'TagLeaderBoardMember';
  appreciations?: Maybe<Scalars['Int']>;
  upvotes?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type TagManager = {
  __typename?: 'TagManager';
  _id: Scalars['ID'];
  role: Scalars['String'];
  user?: Maybe<User>;
};

export type TagSocialMedia = {
  __typename?: 'TagSocialMedia';
  github?: Maybe<Scalars['String']>;
  officialWebsite?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type TagStats = {
  __typename?: 'TagStats';
  currentWeekFollowersCount?: Maybe<Scalars['Int']>;
  currentWeekPostsCount?: Maybe<Scalars['Int']>;
  lastWeekFollowersCount?: Maybe<Scalars['Int']>;
  lastWeekPostsCount?: Maybe<Scalars['Int']>;
};

export type TagsInput = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum TagsPostFilter {
  Best = 'BEST',
  Hot = 'HOT',
  Recent = 'RECENT'
}

export type UpdateStoryInput = {
  contentMarkdown: Scalars['String'];
  coverImageURL?: InputMaybe<Scalars['String']>;
  isPartOfPublication: PublicationDetails;
  isRepublished?: InputMaybe<IsRepublished>;
  publishAs?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sourcedFromGithub?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags: Array<InputMaybe<TagsInput>>;
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  blogHandle?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  dateJoined?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<User>>>;
  isDeactivated?: Maybe<Scalars['Boolean']>;
  isEvangelist?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numFollowers?: Maybe<Scalars['Int']>;
  numFollowing?: Maybe<Scalars['Int']>;
  numPosts?: Maybe<Scalars['Int']>;
  numReactions?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  publication?: Maybe<Publication>;
  publicationDomain?: Maybe<Scalars['String']>;
  socialMedia?: Maybe<SocialMedia>;
  tagline?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type CreateReplyInput = {
  contentInMarkdown: Scalars['String'];
  postId: Scalars['String'];
  responseId: Scalars['String'];
};

export type CreateReplyOutput = MutationOutput & {
  __typename?: 'createReplyOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  reply?: Maybe<Response>;
  success: Scalars['Boolean'];
};

export type CreateResponseInput = {
  contentInMarkdown: Scalars['String'];
  postId: Scalars['String'];
};

export type CreateResponseOutput = MutationOutput & {
  __typename?: 'createResponseOutput';
  code: Scalars['Int'];
  message: Scalars['String'];
  response?: Maybe<Response>;
  success: Scalars['Boolean'];
};

export type IsRepublished = {
  originalArticleURL: Scalars['String'];
};

export type GetAllBlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogPostsQuery = { __typename?: 'Query', user?: { __typename?: 'User', publication?: { __typename?: 'Publication', posts?: Array<{ __typename?: 'Post', title?: string | null, brief?: string | null, slug?: string | null, coverImage: string } | null> | null } | null } | null };


export const GetAllBlogPostsDocument = gql`
    query GetAllBlogPosts {
  user(username: "Hiyudev") {
    publication {
      posts {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
    `;

export function useGetAllBlogPostsQuery(options?: Omit<Urql.UseQueryArgs<GetAllBlogPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllBlogPostsQuery>({ query: GetAllBlogPostsDocument, ...options });
};