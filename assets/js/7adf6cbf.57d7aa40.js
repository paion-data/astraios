"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[537],{9675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=t(5893),i=t(1151),r=t(4866),a=t(5162);const o={sidebar_position:3,title:"Security",description:"Authorization support"},c=void 0,l={id:"elide/security",title:"Security",description:"Authorization support",source:"@site/docs/elide/security.mdx",sourceDirName:"elide",slug:"/elide/security",permalink:"/docs/elide/security",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/elide/security.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Security",description:"Authorization support"},sidebar:"tutorialSidebar",previous:{title:"Data Models",permalink:"/docs/elide/data-model"},next:{title:"Data Stores",permalink:"/docs/elide/datastores"}},d={},h=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Security Evaluation",id:"security-evaluation",level:2},{value:"Hierarchical Security",id:"hierarchical-security",level:3},{value:"Checks",id:"checks",level:2},{value:"Operation Checks",id:"operation-checks",level:3},{value:"User Checks",id:"user-checks",level:3},{value:"Filter Expression Checks",id:"filter-expression-checks",level:3},{value:"User",id:"user",level:2},{value:"Permission Annotations",id:"permission-annotations",level:2},{value:"Read",id:"read",level:3},{value:"Update",id:"update",level:3},{value:"Create",id:"create",level:3},{value:"Delete",id:"delete",level:3},{value:"NonTransferable",id:"nontransferable",level:3},{value:"Registering Checks in Elide",id:"registering-checks-in-elide",level:2},{value:"Automatic Scanning",id:"automatic-scanning",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,s.jsxs)(n.p,{children:["API authentication is largely a solved problem and generally outside the scope of Elide. Authorization - the act of\nverifying data and operation access for an ",(0,s.jsx)(n.em,{children:"already authenticated user"})," in the Elide framework involves a few core\nconcepts:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User"})," - Each API request is associated with a user principal. The user is opaque to the Elide framework but is\npassed to developer-defined ",(0,s.jsx)(n.em,{children:"check"})," functions that evaluate arbitrary logic or build filter expressions. More details\ncan be found ",(0,s.jsx)(n.a,{href:"#user",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Checks"})," - a function ",(0,s.jsx)(n.em,{children:"or"})," filter expression that grants or denies a user ",(0,s.jsx)(n.strong,{children:"permission"})," to perform a particular\naction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Permissions"})," - a set of annotations (read, update, delete, create, and transfer) that correspond to actions on\nthe data model's entities and fields. Each ",(0,s.jsx)(n.strong,{children:"permission"})," is decorated with one or more checks that are evaluated\nwhen a user attempts to perform that action."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-evaluation",children:"Security Evaluation"}),"\n",(0,s.jsx)(n.p,{children:"Security is applied hierarchically with three goals:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Granting or denying access."})," When a model or field is accessed, a set of checks are evaluated to determine if\nthe access will be denied (i.e. 403 HTTP status code (JSON-API) or GraphQL error object) or permitted. If a user\nhas explicitly requested access to part of the data model they should not see, the request will be rejected."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Filtering Collections."})," If a model has read permissions defined, these checks are evaluated against each model\nthat is a member of the collection. Only the models the user has access to (by virtue of being able to read at\nleast one of the model's fields) are returned in the response."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Filtering a model."})," If a user has read access to a model, but only for a subset of a model's fields, the\ndisallowed fields are excluded from the output (rather than denying the request). However, when the user\nexplicitly requests a field-set that contains a restricted field, the request is rejected rather than filtered."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hierarchical-security",children:"Hierarchical Security"}),"\n",(0,s.jsx)(n.p,{children:"Both JSON-API and GraphQL define mechanisms to fetch and manipulate entities defined by the data model schema. Some\n(rootable) entities can be reached directly by providing their data type and unique identifier in the query. Other\nentities can only be reached through relationships to other entities by traversing the entity relationship graph. The\nElide framework supports both methods of access. This is beneficial because it alleviates the need for all models to be\nread-accessible at the root of the graph. When everything is exposed at the root, the developer needs to enumerate all\nof the valid access patterns for all of the data models which can be unwieldy. In addition to eliminating redundancy in\nsecurity declaration, this form of security can have significant performance benefits for enforcing security on large\ncollections stored in key-value stores that have limited ability for the underlying persistence layer to directly apply\nsecurity filters. It is often possible to deny read access to an entire collection (i.e. hierarchical relationship)\nbefore attempting to verify access to each individual member within that collection. Typically, security rules only need\nto be defined for a subset of models and relationships - often near the roots of the graph. Applying security rules to\nthe relationships to prune the graph can eliminate invalid access patterns. To better understand the sequence of how\nsecurity is applied, consider the data model depicted in Figure below consisting of articles where each contains zero or\nmore comments."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Security Article Comment UML",src:t(1249).Z+"",width:"220",height:"104"})}),"\n",(0,s.jsx)(n.p,{children:"The request to update a specific comment of a particular article involves the following permission checks:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Read permission check on the Article's comments field."}),"\n",(0,s.jsx)(n.li,{children:"Update permission check on the Comment's title field."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When a client modifies one side of a bidirectional relationship, Elide will automatically update the opposite side of\nthe relationship. This implies that the client must have permission to write both sides of the relationship."}),"\n",(0,s.jsx)(n.h2,{id:"checks",children:"Checks"}),"\n",(0,s.jsx)(n.p,{children:"Checks are simply functions that either return:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"whether or not access should be granted to the requesting user."}),"\n",(0,s.jsx)(n.li,{children:"a filter expression that can be used to filter a collection to what is visible to a given user."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Checks can either be invoked:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"immediately prior to the (create, read, update, and delete) action being performed. This is the default case."}),"\n",(0,s.jsx)(n.li,{children:"immediately before committing the transaction that wraps the entire API request. This is limited to checks on\nfields of newly created objects."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Elide supports three different concrete ",(0,s.jsx)(n.code,{children:"Check"})," classes depending on what is being checked:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading check-tree.png",src:t(7251).Z+"",width:"861",height:"225"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Check"})," is the root interface of all three variants which are discussed next"]}),"\n",(0,s.jsx)(n.h3,{id:"operation-checks",children:"Operation Checks"}),"\n",(0,s.jsx)(n.p,{children:"Operation checks are inline checks whose evaluation requires the entity instance being read from or written to. They\noperate in memory of the process running Elide."}),"\n",(0,s.jsxs)(n.p,{children:["Operation checks are expected to implement the following ",(0,s.jsx)(n.code,{children:"Check"})," interface:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"/**\n * Determines whether the user can access the resource.\n *\n * @param object The object that is being read/written.\n * @param requestScope Request scope object\n * @param changeSpec Summary of modifications\n *\n * @return true if security check passed\n */\npublic abstract boolean ok(T object, RequestScope requestScope, Optional<ChangeSpec> changeSpec);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"user-checks",children:"User Checks"}),"\n",(0,s.jsx)(n.p,{children:"User checks depend strictly on the user principal. They only take a User object as input. Because these checks only\ndepend on who is performing the operation and not on what has changed, these checks are only evaluated once per\nrequest - an optimization that accelerates the filtering of large collections."}),"\n",(0,s.jsxs)(n.p,{children:["User checks are expected to implement the following ",(0,s.jsx)(n.code,{children:"Check"})," interface:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"/**\n * Method reserved for user checks.\n *\n * @param user User to check\n *\n * @return True if user check passes, false otherwise\n */\npublic abstract boolean ok(User user);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"filter-expression-checks",children:"Filter Expression Checks"}),"\n",(0,s.jsxs)(n.p,{children:["In some cases, the check logic can be pushed down to the data store itself. For example, a filter can be added to a\ndatabase query to remove elements from a collection where access is disallowed. These checks return a\n",(0,s.jsx)(n.code,{children:"FilterExpression"})," predicate that your data store can use to limit the queries that it uses to marshal the data.\nChecks which extend the ",(0,s.jsx)(n.code,{children:"FilterExpessionCheck"})," must conform to the interface:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"/**\n * Returns a FilterExpression from FilterExpressionCheck.\n *\n * @param entityClass entity type\n * @param requestScope Request scope object\n *\n * @return FilterExpression for FilterExpressionCheck.\n */\npublic abstract FilterExpression getFilterExpression(Type<?> entityClass, RequestScope requestScope);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FilterExpressionCheck"})," ",(0,s.jsx)(n.em,{children:"is"})," an ",(0,s.jsx)(n.code,{children:"OperationCheck"}),". If a security rule combines both an ",(0,s.jsx)(n.code,{children:"OperationCheck"})," and\n",(0,s.jsx)(n.code,{children:"FilterExpression"})," in a disjunction (logical OR), Elide will evaluate both in memory as operation checks."]}),"\n",(0,s.jsxs)(n.p,{children:["Most ",(0,s.jsx)(n.code,{children:"FilterExpressionCheck"})," functions construct a ",(0,s.jsx)(n.code,{children:"FilterPredicate"})," which is a concrete implementation of the\n",(0,s.jsx)(n.code,{children:"FilterExpression"})," interface:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"/**\n * Constructs a filter predicate.\n *\n * @param path The path through the entity relationship graph to a particular attribute to filter on.\n * @param op The filter comparison operator to evaluate.\n * @param values The list of values to compare the attribute against.\n */\npublic FilterPredicate(Path path, Operator op, List<Object> values) {\n\n    ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is an example to filter the Author model by book titles:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// Construct a filter for the Author model for books.title == \'Harry Potter\'\nPath.PathElement authorPath = new Path.PathElement(Author.class, Book.class, "books");\nPath.PathElement bookPath = new Path.PathElement(Book.class, String.class, "title");\nList<Path.PathElement> pathList = Arrays.asList(authorPath, bookPath);\nPath path = new Path(pathList);\n\nreturn new FilterPredicate(path, Operator.IN, Collections.singletonList("Harry Potter"));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Filter expression checks are most important when a security rule is tied in some way to the data itself. By pushing\nthe security rule down to the datastore, the data can be more efficiently queried which vastly improves performance.\nMoreover, this feature is critical for implementing a service that requires complex security rules (i.e. anything\nmore than role-based access) on large collections."}),"\n",(0,s.jsx)(n.h2,{id:"user",children:"User"}),"\n",(0,s.jsxs)(n.p,{children:["Each request is associated with a ",(0,s.jsx)(n.code,{children:"User"})," object. The User is simply an object that wraps a\n",(0,s.jsx)(n.code,{children:"java.security.Principal"})," object. It includes methods to:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Extract the user name."}),"\n",(0,s.jsx)(n.li,{children:"Extract the underlying principal."}),"\n",(0,s.jsx)(n.li,{children:"Check if the user belongs to a particular role."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"User"})," objects wraps the Jakarta\n",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jakartaee-rest/jaxrs-api/target/apidocs/jakarta.ws.rs/jakarta/ws/rs/core/SecurityContext.html",children:"SecurityContext"}),"\n-object."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"SecurityContext"})," is created outside the Elide framework in a ",(0,s.jsx)(n.a,{href:"https://jcp.org/en/jsr/detail?id=311",children:"JAX-RS"}),"\n",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jakartaee-rest/jaxrs-api/target/apidocs/jakarta.ws.rs/jakarta/ws/rs/container/ContainerRequestFilter.html",children:"ContainerRequestFilter"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Override\npublic void filter(ContainerRequestContext containerRequestContext) throws IOException {\n    containerRequestContext.setSecurityContext(new SecurityContext(){\n\n        ...\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This filter will typically authenticate the request and store an identifier about the user inside the new\n",(0,s.jsx)(n.code,{children:"SecurityContext"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"permission-annotations",children:"Permission Annotations"}),"\n",(0,s.jsxs)(n.p,{children:["The permission annotations include ",(0,s.jsx)(n.code,{children:"ReadPermission"}),", ",(0,s.jsx)(n.code,{children:"UpdatePermission"}),", ",(0,s.jsx)(n.code,{children:"CreatePermission"}),", and ",(0,s.jsx)(n.code,{children:"DeletePermission"}),"\nPermissions are annotations which can be applied to a model at the ",(0,s.jsx)(n.code,{children:"package"}),", ",(0,s.jsx)(n.code,{children:"entity"}),", or ",(0,s.jsx)(n.code,{children:"field"}),"-level. The most\nspecific annotation always take precedence (",(0,s.jsx)(n.code,{children:"package < entity < field"}),"). More specifically, a field annotation\noverrides the behavior of an entity annotation. An entity annotation overrides the behavior of a package annotation.\nEntity annotations can be inherited from superclasses. When no annotation is provided at any level, access is\nimplicitly granted for ",(0,s.jsx)(n.code,{children:"ReadPermission"}),", ",(0,s.jsx)(n.code,{children:"UpdatePermission"}),", ",(0,s.jsx)(n.code,{children:"CreatePermission"}),", and ",(0,s.jsx)(n.code,{children:"DeletePermission"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The permission annotations wrap a boolean expression composed of the check(s) to be evaluated combined with ",(0,s.jsx)(n.code,{children:"AND"}),",\n",(0,s.jsx)(n.code,{children:"OR"}),", and ",(0,s.jsx)(n.code,{children:"NOT"})," operators and grouped using parenthesis. The checks are uniquely identified within the expression by\na string - typically a human readable phrase that describes the intent of the check (",(0,s.jsx)(n.em,{children:'"principal is admin at company\nOR principal is super user with write permissions"'}),"). These strings are mapped to the explicit ",(0,s.jsx)(n.code,{children:"Check"})," classes at\nruntime by registering them with Elide. When no registration is made, the checks can be identified by their fully\nqualified class names. The complete expression grammar can be found [here][source-grammar]."]}),"\n",(0,s.jsx)(n.p,{children:"To better understand how permissions work consider the following sample code. (Only the relevant portions are\nincluded.)"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(a.Z,{value:"user",label:"User.java",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@ReadPermission(expression = "Prefab.Role.All")\n@UpdatePermission(expression = "user is a superuser OR user is this user")\n@DeletePermission(expression = "user is a superuser OR user is this user")\npublic class User {\n\n    String name;\n\n    @OneToMany(mappedBy = "author")\n    Set<Post> posts;\n}\n'})})}),(0,s.jsx)(a.Z,{value:"post",label:"Post.java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@ReadPermission(expression = "Post.isVisible OR user owns this post OR user is a superuser")\n@UpdatePermission(expression = "user owns this post")\n@CreatePermission(expression = "user owns this post")\n@DeletePermission(expression = "user owns this post")\npublic class Post {\n\n    @ManyToOne\n    User author;\n\n    @UpdatePermission(expression = "user owns this post OR user is a superuser")\n    boolean published;\n\n    @OneToMany(mappedBy = "post")\n    Set<Comment> comments;\n}\n'})})}),(0,s.jsx)(a.Z,{value:"comment",label:"Comment.java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// user has to be able to see the post and to see the comment, or else be a super user\n@ReadPermission(expression = "((Post.isVisible OR user owns this post) AND (comment is visible OR user made this comment)) OR user is a superuser")\n@UpdatePermission(expression = "user made this comment")\n@CreatePermission(expression = "post is visible")\n@DeletePermission(expression = "user made this comment")\npublic class Comment {\n\n    @ManyToOne\n    User author;\n    @ManyToOne\n    Post post;\n    @UpdatePermission(expression = "user owns this post OR user is a superuser")\n    boolean suppressed;\n}\n'})})}),(0,s.jsx)(a.Z,{value:"is-owner",label:"IsOwner.java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@SecurityCheck(IsOwner.PRINCIPAL_IS_OWNER)\npublic static class IsOwner<Post> extends OperationCheck {\n\n    public static final String PRINCIPAL_IS_OWNER = "user owns this post";\n\n    @Override\n    boolean ok(Post post, RequestScope requestScope, Optional<ChangeSpec> changeSpec) {\n        return post.author.equals(requestScope.getUser());\n    }\n}\n'})})}),(0,s.jsx)(a.Z,{value:"is-superuser",label:"IsSuperuser.java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@SecurityCheck(IsSuperUser.PRINCIPAL_IS_SUPERUSER)\npublic static class IsSuperuser extends UserCheck {\n\n    public static final String PRINCIPAL_IS_SUPERUSER = "user is a superuser";\n\n    @Override\n    boolean ok(User user) {\n        return user.isInRole("SUPER_USER");\n    }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"read",children:"Read"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ReadPermission"})," governs whether a model or field can be read by a particular user. If the expression evaluates to\n",(0,s.jsx)(n.code,{children:"true"})," then access is granted. Notably, ",(0,s.jsx)(n.code,{children:"ReadPermission"})," is evaluated as the user navigates through the entity\nrelationship graph. Elide's security model is focused on field-level access, with permission annotations applied on an\nentity or package being shorthand for applying that same security to every field in that scope. For example, if a\nrequest is made to ",(0,s.jsx)(n.code,{children:"GET /users/1/posts/3/comments/99"})," the permission execution will be as follows:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ReadPermission"})," on ",(0,s.jsx)(n.code,{children:"User<1>#posts"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ReadPermission"})," on ",(0,s.jsx)(n.code,{children:"Post<3>#comments"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ReadPermission"})," on any field on ",(0,s.jsx)(n.code,{children:"Comment<99>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If all of these checks succeed, then the response will succeed. The contents of the response are determined by\nevaluating the ",(0,s.jsx)(n.code,{children:"ReadPermission"})," on each field. The response will contain the subset of fields where ",(0,s.jsx)(n.code,{children:"ReadPermission"})," is\ngranted. If a field does not have an annotation, then access defaults to whatever is specified at the entity level. If\nthe entity does not have an annotation, access defaults to whatever is specified at the package. If the package does not\nhave an annotation, access defaults to granted."]}),"\n",(0,s.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UpdatePermission"})," governs whether a model can be updated by a particular user. Update is invoked when an attribute's\nvalue is changed or values are added to or removed from a relationship. Examples of operations that will evaluate\n",(0,s.jsx)(n.code,{children:"UpdatePermission"})," given objects ",(0,s.jsx)(n.code,{children:"Post"})," and ",(0,s.jsx)(n.code,{children:"User"})," from the code snippets above:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Changing the value of ",(0,s.jsx)(n.code,{children:"Post.published"})," will evaluate ",(0,s.jsx)(n.code,{children:"UpdatePermission"})," on ",(0,s.jsx)(n.code,{children:"published"}),". Because more specific checks\noverride less specific checks, the ",(0,s.jsx)(n.code,{children:"UpdatePermission"})," on the entity ",(0,s.jsx)(n.code,{children:"Post"})," will not be evaluated."]}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"Post.author = User"})," will evaluate ",(0,s.jsx)(n.code,{children:"UpdatePermission"})," on ",(0,s.jsx)(n.code,{children:"Post"})," since ",(0,s.jsx)(n.code,{children:"author"})," does not have a more specific\nannotation. Because ",(0,s.jsx)(n.code,{children:"author"})," is a bidirectional relationship, ",(0,s.jsx)(n.code,{children:"UpdatePermission"})," will also be evaluated on the\n",(0,s.jsx)(n.code,{children:"User.posts"})," field."]}),"\n",(0,s.jsxs)(n.li,{children:["Removing ",(0,s.jsx)(n.code,{children:"Post"})," from ",(0,s.jsx)(n.code,{children:"User.posts"})," will trigger ",(0,s.jsx)(n.code,{children:"UpdatePermission"})," on both the ",(0,s.jsx)(n.code,{children:"Post"})," and ",(0,s.jsx)(n.code,{children:"User"})," entities."]}),"\n",(0,s.jsxs)(n.li,{children:["Creating ",(0,s.jsx)(n.code,{children:"Post"})," will ",(0,s.jsx)(n.em,{children:"not"})," trigger ",(0,s.jsx)(n.code,{children:"UpdatePermission"})," checks on any fields that are initialized in the request.\nHowever, it will trigger ",(0,s.jsx)(n.code,{children:"UpdatePermission"})," on any bidirectional relationship fields on preexisting objects."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CreatePermission"})," governs whether a model can be created or a field can be initialized in a newly created model\ninstance. Whenever a model instance is newly created, initialized fields are evaluated against ",(0,s.jsx)(n.code,{children:"CreatePermission"})," rather\nthan ",(0,s.jsx)(n.code,{children:"UpdatePermission"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DeletePermission"})," governs whether a model can be deleted."]}),"\n",(0,s.jsx)(n.h3,{id:"nontransferable",children:"NonTransferable"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NonTransferable"})," governs whether an existing model instance (one created in a prior transaction) can be assigned to\nanother collection other than the one in which it was initially created. Basically, does a collection 'own' the model\ninstance in a private sense (composition) or can it be moved or referenced by other collections (aggregation)."]}),"\n",(0,s.jsxs)(n.p,{children:["Marking an object ",(0,s.jsx)(n.code,{children:"NonTransferable"})," means that it is owned by its containing collections at object creation. It cannot\nbe moved or copied to another collection after creation. Excluding this annotation means that instances of the class can\nbe moved or copied to other collections ",(0,s.jsx)(n.em,{children:"provided the user agent can read the object"})," (",(0,s.jsx)(n.code,{children:"ReadPermission"})," is satisfied on\nat least some of its fields)."]}),"\n",(0,s.jsx)(n.h2,{id:"registering-checks-in-elide",children:"Registering Checks in Elide"}),"\n",(0,s.jsx)(n.p,{children:"Once an Elide data model has been annotated with Permission annotations, the textual descriptions of the checks must be\ntied to actual check classes and registered in Elide. This can be done in one of two ways:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Automatically by marking the ",(0,s.jsx)(n.code,{children:"Check"})," classes with a ",(0,s.jsx)(n.code,{children:"SecurityCheck"})," annotation. Elide will automatically scan for\n",(0,s.jsx)(n.code,{children:"SecurityCheck"})," classes and bind them."]}),"\n",(0,s.jsxs)(n.li,{children:["Manually by creating a ",(0,s.jsx)(n.code,{children:"Map<String, Class<? extends Check>>"})," where they key is the description and the value is the\nCheck class. This is then passed to the constructor of the ",(0,s.jsx)(n.code,{children:"EntityDictionary"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"automatic-scanning",children:"Automatic Scanning"}),"\n",(0,s.jsxs)(n.p,{children:["Elide will find our security checks in the classpath if they are tagged with the ",(0,s.jsx)(n.code,{children:"SecurityCheck"})," annotation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@SecurityCheck(AdminCheck.USER_IS_ADMIN)\npublic class AdminCheck extends UserCheck {\n\n    public static final String USER_IS_ADMIN = "User is Admin";\n\n    @Override\n    boolean ok(User user) {\n       ...\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EntityDictionary"})," must be told to scan for checks (by calling ",(0,s.jsx)(n.code,{children:"dictionary.scanForSecurityChecks"}),"). This is done\nautomatically in Elide at startup."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var s=t(6010);const i={tabItem:"tabItem_Ymn6"};var r=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var s=t(7294),i=t(6010),r=t(2466),a=t(6550),o=t(469),c=t(1980),l=t(7392),d=t(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=u(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[l,h]=m({queryString:t,groupId:i}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),j=(()=>{const e=l??x;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function y(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==s&&(l(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,i.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},7251:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/check-tree-599e5f0c554a1ff69093dfde84f4110f.png"},1249:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);