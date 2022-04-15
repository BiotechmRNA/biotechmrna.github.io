(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [563],
    {
        6981: function (A, e, t) {
            "use strict";
            var s = t(1664),
                a = t(5893);
            e.Z = function (A) {
                var e = A.text,
                    t = A.link;
                return (0, a.jsx)(s.default, { href: t, "aria-label": e, children: (0, a.jsx)("button", { className: "bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ", children: e }) });
            };
        },
        3489: function (A, e, t) {
            "use strict";
            t.d(e, {
                $: function () {
                    return a;
                },
            });
            t(7294);
            var s = t(5893),
                a = function () {
                    return (0, s.jsxs)("footer", {
                        className: "mt-auto p-4",
                        children: [
                            (0, s.jsx)("hr", {}),
                            (0, s.jsx)("div", { className: "flex justify-center m-5 text-gray-600 text-sm", children: "Computational Healthcare and Biotechnology Lab, 1100 South Marietta Pkwy SE, Marietta, GA 30060" }),
                        ],
                    });
                };
        },
        1944: function (A, e, t) {
            "use strict";
            t(7294);
            var s = t(9008),
                a = t(5893);
            e.Z = function (A) {
                var e = A.title;
                return (0, a.jsx)("div", {
                    children: (0, a.jsxs)(s.default, {
                        children: [
                            (0, a.jsx)("title", { children: e }),
                            (0, a.jsx)("meta", { name: "description", content: "Computational Health and Biology Lab at Kennesaw State University. Headed by Dr. Mohammed Aledhari" }),
                            (0, a.jsx)("meta", { name: "theme-color", content: "#1E40AF" }),
                            (0, a.jsx)("meta", { property: "og:title", content: "COHB Lab at KSU" }),
                            (0, a.jsx)("meta", { property: "og:site_name", content: "cohblab.vercel.app" }),
                            (0, a.jsx)("meta", { property: "og:description", content: "Computational Health and Biology Lab at Kennesaw State University. Headed by Dr. Mohammed Aledhari" }),
                            (0, a.jsx)("meta", { property: "og:image", content: "https://itsnotacareer.files.wordpress.com/2019/06/bioinformatics_banner_1140x400.jpg" }),
                            (0, a.jsx)("meta", { name: "twitter:card", content: "summary_large_image" }),
                            (0, a.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                        ],
                    }),
                });
            };
        },
        1053: function (A, e, t) {
            "use strict";
            t.d(e, {
                w: function () {
                    return i;
                },
            });
            t(1664);
            var s = t(7294),
                a = t(5893),
                i = function () {
                    var A = (0, s.useState)(!1),
                        e = A[0],
                        t = A[1];
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("nav", {
                            className: "flex items-center bg-gradient-to-r from-blue-900 to-green-700 px-5 py-4 w-full overflow-hidden absolute top-0 left-0 z-10",
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("a", { href: "/", className: "inline-flex items-center sm:px-4", children: (0, a.jsx)("span", { className: "text-2xl text-gray-50 font-bold uppercase tracking-wide", children: "COHB Lab" }) }),
                                    (0, a.jsx)("button", {
                                        className: " inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-gray-50 ml-auto hover:text-white outline-none",
                                        onClick: function () {
                                            t(!e);
                                        },
                                        children: (0, a.jsx)("svg", {
                                            className: "w-7 h-7",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }),
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: "".concat(e ? "" : "hidden", "   w-full lg:inline-flex lg:flex-grow lg:w-auto"),
                                        children: (0, a.jsxs)("div", {
                                            className: "lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto mr-5 text-base",
                                            children: [
                                                (0, a.jsx)("a", {
                                                    href: "/news",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white ",
                                                    children: "News",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/research",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "Research",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/people",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "People",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/publications",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "Publications",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/teaching",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "Teaching",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/software",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "Software",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/supplements",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "Supplements",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/positions",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "Positions",
                                                }),
                                                (0, a.jsx)("a", {
                                                    href: "/contact",
                                                    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-semibold items-center justify-center hover:bg-green-600 hover:text-white",
                                                    children: "Contact",
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        4356: function (A, e, t) {
            "use strict";
            t.r(e),
                t.d(e, {
                    default: function () {
                        return g;
                    },
                });
            var s = t(1053),
                a = t(3489),
                i = t(5675),
                n = [
                    {
                        name: "Rehma Razzak",
                        id: 7,
                        previous: !1,
                        title: "PhD Student",
                        gradStudent: !0,
                        department: "Data Science and Analytics",
                        interests: "Game Development, Computer Science, Machine Learning",
                        position: "Graduate Research Assistant",
                        picture: t(9687),
                    },
                    {
                        name: "Swetha Pailla ",
                        id: 15,
                        previous: !1,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "Artificial Intelligence, Machine Learning",
                        position: "Graduate Research Assistant",
                        picture: t(3634),
                    },
                    {
                        name: "Roger Ian Konlog",
                        id: 8,
                        previous: !1,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "Machine Learning, Software Engineering",
                        position: "Graduate Research Assistant",
                        picture: t(9713),
                    },
                    {
                        name: "Ryann Williams",
                        id: 10,
                        previous: !1,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "Software Engineering, Computational Biology, Artificial Intelligence",
                        position: "Graduate Research Assistant",
                        picture: t(5721),
                    },
                    {
                        name: "Angelica Ajoku",
                        id: 2,
                        previous: !1,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "Information Technology",
                        interests: "Data Science, Data Analysis",
                        position: "Graduate Research Assistant",
                        picture: t(8704),
                    },
                    {
                        name: "Vijayalakshmi Sathyanarayanan ",
                        id: 16,
                        previous: !1,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "Biotechnology, Artificial intelligence, Data Science and Analytics",
                        position: "Graduate Research Assistant",
                        picture: t(5877),
                    },
                    {
                        name: "Christopher Woolford",
                        id: 3,
                        previous: !1,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "College of Science and Mathematics",
                        interests: "Deep Learning, BioInformatics, Optics, Plasma Physics, Particle Physics",
                        position: "Undergraduate Research Assistant",
                        picture: t(332),
                    },
                    {
                        name: "Cora Meador",
                        id: 4,
                        previous: !1,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "Applied Machine Learning, Cybersecutiy, Bioinformatics, Statistical Inference",
                        position: "Undergraduate Research Assistant",
                        picture: t(5627),
                    },
                    {
                        name: "Dalton Harvey",
                        id: 12,
                        previous: !1,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "Machine Vision, Software Engineering, Data Science",
                        position: "Undergrad Research Assistant",
                        picture: t(8842),
                    },
                    {
                        name: "Ivan Tlaseca",
                        id: 5,
                        previous: !1,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "Artificial intelligence, Android Development, UI Development, Software Engineering",
                        position: "Undergraduate Researcher",
                        picture: t(7880),
                    },
                    {
                        name: "Grey Won",
                        id: 17,
                        previous: !1,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Janelle Tenorio",
                        id: 18,
                        previous: !1,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Sushma Aladhalli Shivakumar ",
                        id: 14,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "Machine Learning, Computer Vision, Data Visualization, Data Analysis, Statistical Modeling",
                        position: "Graduate Research Assistant",
                        picture: t(8201),
                    },
                    {
                        name: "Akula Sai Shashank",
                        id: 11,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "Machine Learning, Deep Learning, Artificial Intelligence, Data Analytics",
                        position: "Graduate Research Assistant",
                        picture: t(9352),
                    },
                    {
                        name: "Keay Davidson",
                        id: 18,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Jessica Barnes",
                        id: 19,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Lin Wang",
                        id: 20,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Yihong Li",
                        id: 21,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Ryan Deem",
                        id: 9,
                        previous: !0,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "Machine Learning, Software Engineering, Neural Networks, Mathematics",
                        position: "Undergraduate Research Assistant",
                        picture: t(8035),
                    },
                    {
                        name: "Suzan Manasreh",
                        id: 1,
                        previous: !0,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "Web Development, Automation, Software Engineering",
                        position: "Undergraduate Research Assistant & Web Developer",
                        picture: t(5056),
                    },
                    {
                        name: "Sandra Gomez Castro",
                        id: 13,
                        previous: !0,
                        title: "Undergrad Student",
                        gradStudent: !1,
                        department: "Data Science and Analytics",
                        interests: "Data Science, Machine Learning",
                        position: "Undergrad Research Assistant",
                        picture: t(3407),
                    },
                    {
                        name: "Yihong Li",
                        id: 21,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Nihad Kalathingal",
                        id: 22,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Joshua Odeyemi",
                        id: 23,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Eric Camadine",
                        id: 24,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Former Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Xiaoju Jiang",
                        id: 25,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Former Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Shelby Joji",
                        id: 26,
                        previous: !0,
                        title: "Grad Student",
                        gradStudent: !1,
                        department: "College of Computing and Software Engineering",
                        interests: "COHB Lab",
                        position: "Former Graduate Research Assistant",
                        picture: t(67),
                    },
                    {
                        name: "Andy Vu",
                        id: 27,
                        previous: !1,
                        title: "Grad Student",
                        gradStudent: !0,
                        department: "College of Computing and Software Engineering",
                        interests: "Machine Learning, Deep learning, Data Analytics",
                        position: "Graduate Research Assistant",
                        picture: t(6408),
                    },
                ],
                r = (t(6981), t(1944)),
                o = t(5893),
                d = function (A) {
                    var e = A.person;
                    return (0, o.jsxs)("div", {
                        className: "md:flex mb-7 text-base",
                        children: [
                            (0, o.jsx)("div", { className: "mr-5", children: (0, o.jsx)(i.default, { src: e.picture, objectFit: "cover", width: 150, height: 150 }) }),
                            (0, o.jsxs)("div", {
                                className: "mt-3 sm:mt-0",
                                children: [
                                    (0, o.jsx)("p", { className: "font-medium text-lg text-blue-800", children: e.name }),
                                    (0, o.jsx)("p", { className: "", children: e.position }),
                                    (0, o.jsx)("p", { children: e.department }),
                                    (0, o.jsxs)("p", { children: [(0, o.jsx)("span", { className: "bg-green-300", children: "Research Interests:" }), " ", e.interests] }),
                                ],
                            }),
                        ],
                    });
                };
            var g = function () {
                return (0, o.jsxs)("div", {
                    className: "bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen",
                    children: [
                        (0, o.jsx)(r.Z, { title: "People | KSU Lab" }),
                        (0, o.jsx)(s.w, {}),
                        (0, o.jsx)("div", {
                            className: "container w-full md:max-w-5xl px-5 sm:mx-auto pt-14 mt-10 text-gray-900",
                            children: (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)("h1", { className: "font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl", children: "People" }),
                                    (0, o.jsx)("hr", {}),
                                    (0, o.jsx)("h2", { className: "text-lg mt-8 mb-4 font-bold", children: "Head of Lab" }),
                                    (0, o.jsx)("div", {
                                        className: "container w-full md:max-w-4xl",
                                        children: (0, o.jsxs)("div", {
                                            className: "md:flex mb-7 text-base",
                                            children: [
                                                (0, o.jsx)("div", { className: "mr-5", children: (0, o.jsx)(i.default, { src: t(7426), objectFit: "cover", width: 150, height: 150 }) }),
                                                (0, o.jsxs)("div", {
                                                    className: "mt-3 sm:mt-0",
                                                    children: [
                                                        (0, o.jsx)("p", { className: "font-medium text-lg text-blue-800", children: "Mohammed Aledhari" }),
                                                        (0, o.jsx)("p", { className: "", children: "Assistant Professor" }),
                                                        (0, o.jsx)("p", { children: "College of Computing and Software Engineering" }),
                                                        (0, o.jsxs)("p", {
                                                            children: [(0, o.jsx)("span", { className: "bg-green-300", children: "Research Interests:" }), " ", "Artificial Intelligence, Machine Learning, Data Science, Computer Vision"],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, o.jsx)("h2", { className: "text-lg mt-8 mb-4 font-bold", children: "Graduate Students" }),
                                    (0, o.jsx)("div", {
                                        className: "container w-full md:max-w-4xl",
                                        children: n.map(function (A) {
                                            return A.gradStudent && !A.previous ? (0, o.jsx)(d, { person: A }, A.id) : (0, o.jsx)("div", {}, A.id);
                                        }),
                                    }),
                                    (0, o.jsx)("h2", { className: "text-lg mt-8 mb-4 font-bold", children: "Undergraduate Students" }),
                                    n.map(function (A) {
                                        return A.gradStudent || A.previous ? (0, o.jsx)("div", {}, A.id) : (0, o.jsx)(d, { person: A }, A.id);
                                    }),
                                    (0, o.jsx)("h2", { className: "text-lg mt-8 mb-4 font-bold", children: "Former Graduate Students" }),
                                    n.map(function (A) {
                                        return A.previous && A.gradStudent ? (0, o.jsx)(d, { person: A }, A.id) : (0, o.jsx)("div", {}, A.id);
                                    }),
                                    (0, o.jsx)("h2", { className: "text-lg mt-8 mb-4 font-bold", children: "Former Undergraduate Students" }),
                                    n.map(function (A) {
                                        return A.previous && !A.gradStudent ? (0, o.jsx)(d, { person: A }, A.id) : (0, o.jsx)("div", {}, A.id);
                                    }),
                                    (0, o.jsxs)("div", {
                                        className: "my-5",
                                        children: [(0, o.jsx)("div", { className: "my-1 font-normal italic text-gray-400", children: "December 2021 Group Photo" }), (0, o.jsx)(i.default, { src: t(8902), objectFit: "cover" })],
                                    }),
                                ],
                            }),
                        }),
                        (0, o.jsx)(a.$, {}),
                    ],
                });
            };
        },
        6306: function (A, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/people",
                function () {
                    return t(4356);
                },
            ]);
        },
        6408: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/andy_vu.d8d9ea36.jpg",
                    height: 2089,
                    width: 2489,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAQQDAAAAAAAAAAAAAAABAgADBBEiBXGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIRAxEAPwC+rbXJ5ZBhijW5cb69Y9iIljmQdN//2Q==",
                });
        },
        8704: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/angelica_ajoku.877dbcc2.jpg",
                    height: 372,
                    width: 275,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDBBEhBhJR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAMAwEAAhEDEQA/AJpbXIa4bEGWJrpe/tCWZDIwQGnXpztERABVJt//2Q==",
                });
        },
        332: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/christopher_woolford.44710f16.jpg",
                    height: 491,
                    width: 316,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDBBMhERIU/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABkRAAMAAwAAAAAAAAAAAAAAAAABEQISIf/aAAwDAQACEQMRAD8Ai2KXpjgfTquifjGZrtHsdgkk7PCIiM8E3Re85D//2Q==",
                });
        },
        5627: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/cora_meador.69361e52.jpg",
                    height: 1040,
                    width: 1046,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAACAQQCAwAAAAAAAAAAAAABAgADBBESBQYiUYH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//EABYRAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEQMRAD8AoU7JbDsWjcxSFuzmmlPbwbCgFfQbc5z8iIiKaf/Z",
                });
        },
        8842: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/dalton_harvey.f98aa90c.jpg",
                    height: 1502,
                    width: 1126,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EACAQAAIBAgcBAAAAAAAAAAAAAAECAAQFAwcREhQhMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhP/2gAMAwEAAhEDEQA/ACZlW1LjUluS1O4U4Z2eH71rERI4wJ02f//Z",
                });
        },
        8902: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/group_photo.1f35d327.png",
                    height: 3024,
                    width: 4032,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEWom4uQh39ydIIpLjebk4dSUlWuqJw7NTF8dG5tXkmSjIadj3teU0qAgn9zZVV+cWCHfXA8P024oIR4ali8rJXYxqzRt5MdHh8tKSallHqI4MHyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVQImQXBBQLAIAwAsUPbYhOY/f+jS4gZcgS8c2Wv68KrJqsUjrCd1nonhXl/8gjahsiw9wcnCQHORm252QAAAABJRU5ErkJggg==",
                });
        },
        7880: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/ivan_tlaseca.09ed9c78.jpg",
                    height: 274,
                    width: 271,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwQDAQAAAAAAAAAAAAABAAIEAxETIQYHQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEQMRAD8AsQ+cspdiSYcqAI7K9URMmW7mlpsHOHw615dERUMkLf/Z",
                });
        },
        7426: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/professor.d02c2109.jpeg",
                    height: 384,
                    width: 303,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIRBAYhYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCVlvWZHkKSt1KutegAohNv/9k=",
                });
        },
        9687: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/rehma_razzak.92cdc035.png",
                    height: 758,
                    width: 604,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAV1BMVEXb0MitYl6+KDt8XVPBLUOslY3VKT3m29LLKkSnm5aUdW7EdmWwd2TAtK/MSkvaxrzEsqlrTkieIjHrppVIKCZ8LDTRmYXCmoZkPjguEhWihXzrtpzRaX3GL5mmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVQImQXBhQHAMAzAMBeT8pj/v3MSkJKABHdOwpjr+0C46pEbeSura5jblP3DLr2rotHb6H85WwIPBtm19gAAAABJRU5ErkJggg==",
                });
        },
        9713: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/roger_ian_konlog.2ec45e70.jpg",
                    height: 548,
                    width: 468,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAeEAABAwQDAAAAAAAAAAAAAAABAAMhAgQREgUGkf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECAxL/2gAMAwEAAhEDEQA/AJc9Z5Wltx21DD0jQPV6E0xBxnBE+oiIdcS9M//Z",
                });
        },
        8035: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/ryan_deem.b8932a18.jpg",
                    height: 890,
                    width: 940,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAhEAABAwEJAAAAAAAAAAAAAAAAAQMREwIEBQYSIjGBkf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAAIBAxEE/9oADAMBAAIRAxEAPwCOuY7suN2Yceoq5SiNscavewAUvzouYHFjSf/Z",
                });
        },
        5721: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/ryann_williams.346a4cd1.jpg",
                    height: 365,
                    width: 379,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIDBAURBhMUIZH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAE//aAAwDAQACEQMRAD8AtRp3mWeWasmgkLRuNEbSC4huCw95ByPUREzCpVv/2Q==",
                });
        },
        9352: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/sai_shashank_akula.a1306256.jpg",
                    height: 452,
                    width: 410,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAACAgMBAQAAAAAAAAAAAAABAgARAwQFIWH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/AKX5OhsZXReg2NhRKILojyqJ+xESbrApH//Z",
                });
        },
        3407: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/sandra_gomez_castro.4dc0aea2.jpg",
                    height: 612,
                    width: 494,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBCExBQcRQf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oADAMBAAIRAxEAPwCXD2deqclYsxxvdHNgse73I0QND7pERVkV/9k=",
                });
        },
        8201: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/sushma_aladhalli_shivakumar.c3d03031.jpg",
                    height: 834,
                    width: 1003,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAdEAABBAIDAAAAAAAAAAAAAAACAAEEEgMRQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABoRAQEAAgMAAAAAAAAAAAAAAAIBAAMEEVH/2gAMAwEAAhEDEQA/AJjPOwxzmUYoeGoG5G1hIum15yiIh0Ks93H5AIUk8z//2Q==",
                });
        },
        5056: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/suzan_manasreh.58d06c17.jpg",
                    height: 126,
                    width: 118,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAABBQEAAwAAAAAAAAAAAAADAAECBBEGBYHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIh/9oADAMBAAIRAxEAPwCfm+jvk8zVKUZNu2T4xMaDCjB8j6fPnREUxbRr/9k=",
                });
        },
        3634: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/swetha_pailla.6db3e747.jpg",
                    height: 440,
                    width: 562,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADESESFXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMRIf/aAAwDAQACEQMRAD8ApKHfvq7lZittTq6k6HErjGvfsREHiVHcVc7P/9k=",
                });
        },
        67: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/unknown_person.f72b49f8.jpeg",
                    height: 1024,
                    width: 925,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAACAgAHAAAAAAAAAAAAAAAAAgESAwURExQhQf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8ApS5gnPa2M21pWFr1Ex6ABgr/2Q==",
                });
        },
        5877: function (A, e, t) {
            "use strict";
            t.r(e),
                (e.default = {
                    src: "/_next/static/media/vijayalakshmi_sathyanarayanan.1e673e05.jpg",
                    height: 980,
                    width: 600,
                    blurDataURL:
                        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAABBQEAAwAAAAAAAAAAAAABAAIDBAURITFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8Ah0dXWy46skVi5YjsRBxLZuEP4Cegd+Ob68IiJLHOguun/9k=",
                });
        },
    },
    function (A) {
        A.O(0, [996, 675, 774, 888, 179], function () {
            return (e = 6306), A((A.s = e));
            var e;
        });
        var e = A.O();
        _N_E = e;
    },
]);
