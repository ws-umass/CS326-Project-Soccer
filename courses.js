const courseData = {
   "cs121": {
      "description": "An introductory course in problem solving, using the programming language Java. Focuses on the fundamental concepts of problem solving and on computer implementation. Intended for computer science majors or those applying for the major. Satisfactory completion is a prerequisite for all higher-level computer science courses. Use of a laptop computer required.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["Henry", "Mark", "John"],
      "2020summer": ["Tom", "Jack", "Lily"],
      "2020fall": ["John", "Mark", "David"],
      "2021spring": ["Tom", "Jack", "Lily"],
      "2021summer": ["Henry", "John", "David"],
      "2021fall": ["Henry", "Jack", "David"],
      "2022spring": ["John", "Mark", "Lily"],
      "2022summer": ["Tom", "Jack", "Lily"]
   },
   "cs186": {
      "description": "This course introduces foundational abstract data types and algorithms. The main focus is on the use of data structures in designing and developing programs to solve problems in a variety of domains. Specific topics include lists, sets, maps, graphs, stacks, queues, searching, and sorting.",
      "credits": 4,
      "2019fall": ["Tom", "Henry", "Mark"],
      "2020spring": ["John", "Mark", "Lily"],
      "2020summer": ["Henry", "Jack", "John"],
      "2020fall": ["Mark", "Jack", "Lily"],
      "2021spring": ["David", "Jack", "Lily"],
      "2021summer": ["Tom", "Mark", "Lily"],
      "2021fall": ["John", "Jack", "David"],
      "2022spring": ["David", "Jack", "Lily"],
      "2022summer": ["Tom", "David", "Henry"]
   },
   "cs187": {
      "description": "The course introduces and develops methods for designing and implementing abstract data types using the Java programming language. The main focus is on how to implement abstract data collections and their associated operations. Specific implementations include linked structures, recursive structures, binary trees, balanced trees, and hash tables. Algorithm analysis and asymptotic bounding of implementations is a major topic throughout the course. The topics covered in this course are fundamental to programming and are essential to further computer science courses.",
      "credits": 4,
      "2019fall": ["John", "Jack", "Lily"],
      "2020spring": ["Tom", "Jack", "Lily"],
      "2020summer": ["Tom", "John", "Henry"],
      "2020fall": ["Henry", "Mark", "Lily"],
      "2021spring": ["Tom", "Mark", "John"],
      "2021summer": ["Tom", "Mark", "Lily"],
      "2021fall": ["John", "Jack", "Henry"],
      "2022spring": ["Tom", "John", "Lily"],
      "2022summer": ["John", "Jack", "Lily"]
   },
   "cs198c": {
      "description": "This practicum assumes general background and experience in computer programming (such as that provided by COMPSCI 121 or a similar introductory programming course) and some knowledge of data structures. Content will include basic C data types, declarations, expressions, statements, and functions; simple use of macros; some common library calls (such as formatted input/output); basic pointer manipulation using linked lists; and introduction to using standard tools (gcc and make). It is recommended that students planning to take COMPSCI 230 take this class along with COMPSCI 187.",
      "credits": 1,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["David", "Mark", "Lily"],
      "2020summer": ["Tom", "Mark", "Lily"],
      "2020fall": ["Tom", "Mark", "Lily"],
      "2021spring": ["Tom", "Jack", "Lily"],
      "2021summer": ["Tom", "John", "Lily"],
      "2021fall": ["Tom", "Jack", "Lily"],
      "2022spring": ["John", "Jack", "Lily"],
      "2022summer": ["Tom", "Jack", "John"]
   },
   "cs220": {
      "description": "Development of individual skills necessary for designing, implementing, testing and modifying larger programs, including: design strategies and patterns, using functional and object-oriented approaches, testing and program verification, code refactoring, interfacing with libraries.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["Tom", "Jack", "Lily"],
      "2020summer": ["John", "Jack", "Henry"],
      "2020fall": ["David", "John", "Lily"],
      "2021spring": ["Henry", "Jack", "Lily"],
      "2021summer": ["David", "John", "Lily"],
      "2021fall": ["Tom", "Jack", "Lily"],
      "2022spring": ["David", "Jack", "Lily"],
      "2022summer": ["Tom", "Jack", "Lily"]
   },
   "cs230": {
      "description": "Large-scale software systems like Google - deployed over a world-wide network of hundreds of thousands of computers - have become a part of our lives. These are systems success stories - they are reliable, available (\"up\" nearly all the time), handle an unbelievable amount of load from users around the world, yet provide virtually instantaneous results. On the other hand, many computer systems don't perform nearly as well as Google - hence the now-cliche \"the system is down.\" In this class, we study the scientific principles behind the construction of high-performance, scalable systems. The course begins with a discussion of data representation, and moves up the stack from there to the features of modern architectures, assembly languages, and operating system services such as I/O, process, and synchronization.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["John", "Jack", "Henry"],
      "2020summer": ["Tom", "Jack", "Lily"],
      "2020fall": ["Henry", "Jack", "Lily"],
      "2021spring": ["David", "Jack", "Henry"],
      "2021summer": ["David", "John", "Lily"],
      "2021fall": ["Tom", "Jack", "Henry"],
      "2022spring": ["Tom", "Jack", "Lily"],
      "2022summer": ["David", "Jack", "Lily"]
   },
   "cs240": {
      "description": "Development of mathematical reasoning skills for problems that involve uncertainty. Counting and probability -- basic counting problems, probability definitions, mean, variance, binomial distribution, discrete random variables, continuous random variables, Markov and Chebyshev bounds, Laws of large number, and central limit theorem. Probabilistic reasoning -- conditional probability and odds, Bayes' Law, Markov Chains, Bayesian Network, Markov Decision Processes.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["Tom", "Jack", "Lily"],
      "2020summer": ["Tom", "Jack", "John"],
      "2020fall": ["Tom", "Mark", "Henry"],
      "2021spring": ["Tom", "Mark", "Lily"],
      "2021summer": ["John", "Mark", "Lily"],
      "2021fall": ["Tom", "John", "Lily"],
      "2022spring": ["Henry", "Jack", "Lily"],
      "2022summer": ["Tom", "Mark", "Lily"]
   },
   "cs250": {
      "description": "Basic concepts of discrete mathematics useful to computer science: set theory, strings and formal languages, propositional and predicate calculus, relations and functions, basic number theory. Induction and recursion: interplay of inductive definition, inductive proof, and recursive algorithms. Graphs, trees, and search. Finite-state machines, regular languages, nondeterministic finite automata, Kleene's Theorem.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["John", "Jack", "Lily"],
      "2020summer": ["Tom", "Jack", "Henry"],
      "2020fall": ["Henry", "John", "Lily"],
      "2021spring": ["Tom", "Jack", "Henry"],
      "2021summer": ["Tom", "John", "Lily"],
      "2021fall": ["Tom", "Jack", "John"],
      "2022spring": ["Henry", "Mark", "Lily"],
      "2022summer": ["Tom", "Mark", "Henry"]
   },
   "cs311": {
      "description": "The design and analysis of efficient algorithms for important computational problems. Emphasis on the relationships between algorithms and data structures and on measures of algorithmic efficiency. Sorting (heapsort, mergesort, quicksort), searching, graph algorithms. Experimental analysis of algorithms also emphasized. Use of computer required.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["Tom", "Mark", "Henry"],
      "2020summer": ["John", "Jack", "Lily"],
      "2020fall": ["Henry", "Mark", "Lily"],
      "2021spring": ["Tom", "John", "Lily"],
      "2021summer": ["John", "Jack", "Henry"],
      "2021fall": ["Henry", "John", "Lily"],
      "2022spring": ["John", "Jack", "Lily"],
      "2022summer": ["Tom", "Jack", "John"]
   },
   "cs320": {
      "description": "In this course, students learn and gain practical experience with software engineering principles and techniques. The practical experience centers on a semester-long team project in which a software development project is carried through all the stages of the software life cycle. Topics in this course include requirements analysis, specification, design, abstraction, programming style, testing, maintenance, communication, teamwork, and software project management. Particular emphasis is placed on communication and negotiation skills and on designing and developing maintainable software. Use of computer required. Several written assignments, in-class presentations, and a term project.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["Tom", "Jack", "Lily"],
      "2020summer": ["Tom", "Jack", "John"],
      "2020fall": ["John", "Jack", "David"],
      "2021spring": ["Tom", "John", "Lily"],
      "2021summer": ["David", "Jack", "Lily"],
      "2021fall": ["Jack", "John", "Lily"],
      "2022spring": ["Tom", "Henry", "John"],
      "2022summer": ["Tom", "Jack", "Lily"]
   },
   "cs325": {
      "description": "In this course we examine the important problems in Usability, Human Computer Interaction, User Interfaces, and Human Centered Computing. We will examine elements of HCI history, human information processing capabilities, HCI design, user interface prototyping methods and new applications and directions in human computer interaction.",
      "credits": 3,
      "2019fall": ["Tom", "John", "Lily"],
      "2020spring": ["David", "Jack", "Henry"],
      "2020summer": ["David", "John", "Lily"],
      "2020fall": ["John", "Jack", "Lily"],
      "2021spring": ["Tom", "Jack", "Lily"],
      "2021summer": ["Tom", "John", "Lily"],
      "2021fall": ["Tom", "Jack", "John"],
      "2022spring": ["Jack", "John", "Lily"],
      "2022summer": ["Tom", "Jack", "Lily"]
   },
   "cs326": {
      "description": "The World Wide Web was proposed originally as a collection of static documents inter-connected by hyperlinks. Today, the web has grown into a rich platform, built on a variety of protocols, standards, and programming languages, that aims to replace many of the services traditionally provided by a desktop operating system. This course will study core technologies, concepts, and techniques behind the creation of modern web-based systems and applications.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "John"],
      "2020spring": ["Henry", "Jack", "Lily"],
      "2020summer": ["Henry", "John", "David"],
      "2020fall": ["Tom", "John", "Lily"],
      "2021spring": ["Henry", "John", "Lily"],
      "2021summer": ["Tom", "Jack", "David"],
      "2021fall": ["Tom", "Jack", "David"],
      "2022spring": ["Henry", "John", "David"],
      "2022summer": ["John", "Jack", "Lily"]
   },
   "cs345": {
      "description": "Computing has become data-driven, and databases are now at the heart of commercial applications. The purpose of this course is to provide a comprehensive introduction to the use of data management systems within the context of various applications. Some of the covered topics include application-driven database design, schema refinement, implementation of basic transactions, data on the web, and data visualization.",
      "credits": 3,
      "2019fall": ["David", "Jack", "Lily"],
      "2020spring": ["Tom", "John", "Lily"],
      "2020summer": ["David", "John", "Henry"],
      "2020fall": ["Tom", "Jack", "Lily"],
      "2021spring": ["John", "David", "Lily"],
      "2021summer": ["John", "David", "Henry"],
      "2021fall": ["John", "Jack", "Lily"],
      "2022spring": ["Tom", "David", "Henry"],
      "2022summer": ["Tom", "John", "Lily"]
   },
   "cs377": {
      "description": "The design and operation of modern computer operating systems. Review of capabilities of typical computer hardware. Topics include command language interpreter (the shell), processes, concurrency, inter-process communication, linking and loading, memory management, transactions, file systems, distributed systems, security, and protection. Programming projects in Java and C.",
      "credits": 4,
      "2019fall": ["Tom", "Jack", "Lily"],
      "2020spring": ["Tom", "Jack", "Henry"],
      "2020summer": ["John", "Jack", "Henry"],
      "2020fall": ["Tom", "Jack", "Lily"],
      "2021spring": ["John", "Jack", "Henry"],
      "2021summer": ["John", "Jack", "David"],
      "2021fall": ["John", "Henry", "David"],
      "2022spring": ["Tom", "Jack", "David"],
      "2022summer": ["Tom", "Jack", "Lily"]
   },
   "cs383": {
      "description": "The Course explores key concepts of artificial intelligence, including state-space and heuristic search techniques, game playing, knowledge representation, automated planning, reasoning under uncertainty, decision theory and machine learning. We will examine how these concepts are applied in the context of several applications.",
      "credits": 3,
      "2019fall": ["Henry", "Jack", "Lily"],
      "2020spring": ["Tom", "David", "Henry"],
      "2020summer": ["Tom", "Jack", "Lily"],
      "2020fall": ["Tom", "Jack", "Henry"],
      "2021spring": ["Tom", "Henry", "Lily"],
      "2021summer": ["Henry", "Jack", "David"],
      "2021fall": ["Tom", "Jack", "Henry"],
      "2022spring": ["Henry", "Jack", "David"],
      "2022summer": ["Tom", "Henry", "David"]
   }
}

export { courseData };
