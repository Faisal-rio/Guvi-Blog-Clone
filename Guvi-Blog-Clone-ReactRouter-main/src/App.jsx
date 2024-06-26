import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./TopNav";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardMap from "./CardMap";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  const data = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-Optimizing-Web-Development-using-jQuery-for-Responsive-Design.webp",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      description:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
      date: "14 January 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://media.licdn.com/dms/image/C4D12AQHjwdmhAWwOTQ/article-cover_image-shrink_720_1280/0/1564551721864?e=1724889600&v=beta&t=NV31WbM5eVDDoo_B2d4Kkg9l_TExEH1sMCyAuA58Y_Y",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date: "16 January 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://imgs.search.brave.com/EePxtnARsYm_aG9xuhkE0qQfhgYIpoQtyWJSPNSCapU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tbHo4/cHJtbDRubmMuaS5v/cHRpbW9sZS5jb20v/Y2I6MWtwNS41NGE5/YS93Ojc2OC9oOjQw/Mi9xOm1hdXRvL2Y6/YmVzdC9odHRwczov/L2Z1bGxzY2FsZS5p/by93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNC92ZXJ0aWNh/bC12cy1ob3Jpem9u/dGFsLXNjYWxpbmcu/cG5n",
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      description:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date: "6 January 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrf2sTkgkarl0N9duLJl1pe_edfP3xW8151g&s",
      title: "Best Books to Learn Full-Stack Development",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      date: "27 January 2024 ",
      content: "Full Stack Development",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZfuiBKUmWS_yzCSaL0PjDMA55QmxD72Rog&s",
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      date: "26 January 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_W2kbeTTBtdXT_LjwNxyWNa7tj1YOUd_RdA&s",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "8 March 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 June 2024 ",
      content: "Data Science",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyQYhSxZm1WcfnMk8VnmtHXm0H7QJDD7kk3kIDy9O_RqQhQOPv3kD0jMj06T5Fd4XELU&usqp=CAU",
      title: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "30 November 2024 ",
      content: "Data Science",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBsHvGXNrOmExR8mwFn6q-6RUnJb5QLIoyw&s",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      date: "11 December 2024",
      content: "Data Science",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvaHaGA5XhODEzeQISbiys3t2_PxRaZWcTw&s",
      title: "7 Best Full-Stack Development Online Courses [2024]",
      description:
        "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      date: "31 August 2024",
      content: "Full Stack Development",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtYJnxXzeu5nJORN4f2eQKb71ygnNf0ub5Q&s",
      title: "Best Ways to Learn Full Stack Development in 2024",
      description:
        "Full stack development is and will be a promising and in-demand career in the upcoming",
      date: "4 August 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnNSWFUIA1CrNag8fRBUDleeMtTokcCqoOg&s",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      description:
        "Have you ever wondered how much time it would take to become a skilled Full",
      date: "14 February 2024 ",
      content: "Full Stack Development",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGenckr3mveb5Ucqs_qb-f4_ZroBXIXi4BnQ&s",
      title: "Best Data Science Books to Learn in 2024",
      description:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      date: "26 October 2023",
      content: "Data Science",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzFJqNDrl0m3kQ1S-4nhRw8W0f4vhJgO9zQ&s",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      date: "5 October 2023",
      content: "Data Science",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3vngN-qormRwoJbC39lZrEGyQcbCMjRl9w&",
      title: "Useful Python Libraries & Tools for Data Science Beginners",
      description:
        "In a world filled with information, knowing how to understand and use data is super",
      date: "29 September 2023 ",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      date: "28 August 2024 ",
      content: "Data Science",
    },
    {
      //
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKN6itc9umkCdyvvAdluIFRRdGVS71-WH0Ew&s",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "31 December 2024",
      content: "Cyber Security",
    },

    {
      //
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6Jh1v2Tk_GSCiJgKm8Mw_fUa5xs9h31f5w&s",
      title: "What Is Hacking? Types of Hacking & More",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date: "25 September 2022",
      content: "Cyber Security",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      date: "1 March 2021",
      content: "Cyber Security",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
      title:
        "Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
      description:
        "The current technological era is full of competition and those who have profound skillset are",
      date: "23 November 2023",
      content: "Career",
    },
    {
      img: "https://media.licdn.com/dms/image/D4D12AQGyeMNZTL3eCg/article-cover_image-shrink_720_1280/0/1700710936712?e=2147483647&v=beta&t=Cm5rG2mpvWczeU5XF5eOVPAZFR-dU71ACJk98pW4ig0",
      title: "Top 13 Product Based Companies for AI Freshers",
      description:
        "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at",
      date: "10 November 2023",
      content: "Career",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaRASICfbhFgzG8bsYWKch6_EZg51umK7Ag&s",
      title: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
      description:
        "As product-based companies continually innovate and strive to stay ahead of the competition, they seek",
      date: "10 November 2023 ",
      content: "Career",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvoZ_bySiE8piiNCQFBIWMzWXVi5ONvmflMdba4ez45_igXRHIskV8WLxcH5TVdeJYWM&usqp=CAU",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "19 January 2024",
      content: "Career",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnT9-DOF9P6tSPQX7Ll-KMbu2Zi6GbR61Wnw&s",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "2 December 2023",
      content: "Career",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdd2m5mm20ov2xD_ej3AvIXcEI-0XXnpCkL8Kf9JG7jUcUiH41AUq3iM02Fhi8D0L7hcE&usqp=CAU",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      date: "1 December 2023",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp",
      title:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      description:
        "The world is moving towards modernization leading to an increase in the popularity of civil",
      date: "1 December 2023",
      content: "Career",
    },
  ];

  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    ); // to sort Data by Date
    setSortedData(sortedData);
  }, []);

  return (
    <>
      <TopNav />
      <Nav />
      <div className="card-container main-card mt-3 pt-3 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {sortedData.map((ele) => (
                    <Card key={ele.id} data={ele} />
                  ))}
                </>
              }
            ></Route>
            <Route
              path="/FullStackDevelopment"
              element={
                <CardMap data={sortedData} val={"Full Stack Development"} />
              }
            ></Route>
            <Route
              path="/DataScience"
              element={<CardMap data={sortedData} val={"Data Science"} />}
            ></Route>
            <Route
              path="/CyberSecurity"
              element={<CardMap data={sortedData} val={"Cyber Security"} />}
            ></Route>
            <Route
              path="/Career"
              element={<CardMap data={sortedData} val={"Career"} />}
            ></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
