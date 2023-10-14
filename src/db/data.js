import avatar from "@/app/avatar.jpg";

const profile = {
  avatar: { src: avatar.src, size: 192 },
  name: "Nguyễn Thành Tâm",
  location: "Thành phố Hồ Chí Minh, Việt Nam.",
  job: "Front End Developer",
};

const contact = {
  title: "CONTACT",
  phone: "081.653.8938",
  website: "https://nguyenthanhtam73.github.io/",
  email: "nguyenthanhtam08071995@gmail.com",
};

const aboutMe = {
  title: "ABOUT ME",
  content: `Thành thạo các ngôn ngữ HTML, CSS, JavaScript, và các framework như React, Vue.js. 
  Có khả năng tối ưu hóa hiệu suất web và làm việc cùng các đội ngũ đa chức năng để xây dựng giao diện người dùng hấp dẫn và chất lượng. 
  Sự tỉ mỉ và khả năng giải quyết vấn đề là điểm mạnh của tôi, luôn cập nhật kiến thức, công nghệ mới,
  có khả năng giao tiếp tốt và làm việc nhóm hiệu quả để đảm bảo dự án thành công. Tôi cam kết mang đến các trang web và ứng dụng web thân thiện với người dùng và đẹp mắt.`,
};

const skillsSummary = {
  title: "SKILLS SUMMARY",
  content: [
    "Có 6 năm làm việc với HTML, CSS, SCSS,  và JavaScript, JQuery, TypeScript với khả năng sử dụng các framework như ReactJS, NextJS và Vue.js.",
    "Có 2 năm làm trưởng nhóm, xác định yêu cầu ban đầu cho đến việc triển khai, theo dõi tiến độ và đảm bảo rằng dự án hoàn thành đúng hạn. ",
    "Thành thạo thiết kế giao diện người dùng (UI) và trải nghiệm người dùng (UX)",
    "Kỹ năng xây dựng giao diện đáp ứng cho các thiết bị khác nhau và đảm bảo tính tương thích trên các trình duyệt.",
    "Thành thạo trong việc sử dụng Git và các hệ thống quản lý phiên bản",
    "Khả năng tối ưu hóa hiệu suất trang web để đảm bảo tải trang nhanh chóng và trải nghiệm người dùng mượt mà.",
    "Thái độ làm việc tốt, luôn học hỏi và cập nhật với các xu hướng và phương pháp tốt nhất mới nhất trong ngành.",
    "Khả năng làm việc với nhóm tốt, bao gồm mọi thành viên trong nhóm, cấp trên và khách hàng",
  ],
};

const skills = {
  title: "Languages",
  content: [
    "HTML5",
    "CSS3",
    "SASS/SCSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Autoit",
    "SQL Database",
    "GraphQL",
    "SVG",
    "Canvas",
  ],
};

const libraries = {
  title: "Libraries/Frameworks",
  content: [
    "Bootstrap",
    "Tailwind CSS",
    "Styled Components",
    "jQuery",
    "React",
    "NextJS",
    "Vue",
    "Quasar framework",
    "WordPress",
    "Laravel",
    "NodeJS",
    "UI Components Libraries",
    "Ant Design",
    "Webpack",
    "PhantomJS",
  ],
};
const software = {
  title: "Software",
  content: [
    "Figma",
    "Photoshop",
    "Adobe XD, Sketch",
    "Version Control/Git",
    "Responsive Design",
    "Testing/ Unit testing",
    "Node package manager",
    "Trello",
    "Jira",
  ],
};

const education = {
  title: "EDUCATION",
  timeList: [
    {
      position: "Sinh viên",
      time: "8/2014 – 06/2018",
      name: "Trường Đại học Tây Nguyên",
    },
  ],
};

const languages = {
  title: "LANGUAGES",
  content: [
    { lang: "English", level: "Communication" },
    { lang: "vietnamese", level: "Native" },
  ],
};

export {
  profile,
  contact,
  aboutMe,
  skillsSummary,
  skills,
  libraries,
  software,
  education,
  languages,
};
