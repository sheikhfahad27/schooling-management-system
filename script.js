
/* =========================================================
   EDUMANAGE - ACADEMY MANAGEMENT SYSTEM
   Complete Working JavaScript
========================================================= */


/* =========================================================
   STUDENTS DATA
========================================================= */

let students = JSON.parse(localStorage.getItem("edu_students")) || [

    {
        name: "Ayaan Khan",
        id: "ST-1024",
        class: "Grade 10",
        phone: "0301-4587210",
        fee: "Paid",
        status: "Active"
    },

    {
        name: "Hania Ahmed",
        id: "ST-1023",
        class: "Grade 9",
        phone: "0312-7784512",
        fee: "Paid",
        status: "Active"
    },

    {
        name: "Muhammad Huzaifa",
        id: "ST-1022",
        class: "Grade 11",
        phone: "0333-1826401",
        fee: "Pending",
        status: "Active"
    },

    {
        name: "Eman Fatima",
        id: "ST-1021",
        class: "Grade 10",
        phone: "0300-6642319",
        fee: "Paid",
        status: "Active"
    },

    {
        name: "Abdullah Raza",
        id: "ST-1020",
        class: "Grade 9",
        phone: "0345-9012788",
        fee: "Pending",
        status: "Active"
    },

    {
        name: "Maham Noor",
        id: "ST-1019",
        class: "Grade 12",
        phone: "0321-5538124",
        fee: "Paid",
        status: "Active"
    },

    {
        name: "Saad Ali",
        id: "ST-1018",
        class: "Grade 10",
        phone: "0308-4412876",
        fee: "Paid",
        status: "Active"
    },

    {
        name: "Zoya Siddiqui",
        id: "ST-1017",
        class: "Grade 11",
        phone: "0315-7721038",
        fee: "Pending",
        status: "Active"
    }

];


/* =========================================================
   TEACHERS
========================================================= */

const teachers = [

    {
        name: "Sarah Ahmed",
        subject: "Mathematics",
        exp: "6 Years",
        classes: "Grade 9–12",
        initials: "SA"
    },

    {
        name: "Usman Tariq",
        subject: "English",
        exp: "4 Years",
        classes: "Grade 8–10",
        initials: "UT"
    },

    {
        name: "Areeba Khan",
        subject: "Computer Science",
        exp: "5 Years",
        classes: "Grade 9–12",
        initials: "AK"
    },

    {
        name: "Hamza Malik",
        subject: "Physics",
        exp: "7 Years",
        classes: "Grade 10–12",
        initials: "HM"
    },

    {
        name: "Sana Noor",
        subject: "Chemistry",
        exp: "3 Years",
        classes: "Grade 10–12",
        initials: "SN"
    },

    {
        name: "Bilal Ahmed",
        subject: "Biology",
        exp: "5 Years",
        classes: "Grade 9–12",
        initials: "BA"
    }

];


/* =========================================================
   RESULTS
========================================================= */

const results = [

    {
        name: "Ayaan Khan",
        class: "Grade 10",
        math: 92,
        english: 88,
        science: 90,
        percentage: "90.0%",
        grade: "A+"
    },

    {
        name: "Hania Ahmed",
        class: "Grade 9",
        math: 86,
        english: 91,
        science: 84,
        percentage: "87.0%",
        grade: "A"
    },

    {
        name: "Eman Fatima",
        class: "Grade 10",
        math: 82,
        english: 89,
        science: 87,
        percentage: "86.0%",
        grade: "A"
    },

    {
        name: "Maham Noor",
        class: "Grade 12",
        math: 95,
        english: 93,
        science: 91,
        percentage: "93.0%",
        grade: "A+"
    }

];


/* =========================================================
   PAGE DATA
========================================================= */

const pageData = {

    dashboard: [
        "Dashboard",
        "Welcome back! Here's what's happening today."
    ],

    students: [
        "Students",
        "Manage all enrolled students."
    ],

    teachers: [
        "Teachers",
        "Manage your teaching staff."
    ],

    attendance: [
        "Attendance",
        "Record and monitor daily student attendance."
    ],

    fees: [
        "Fee Management",
        "Track payments and outstanding fees."
    ],

    results: [
        "Results",
        "Manage exams, marks and student results."
    ],

    notices: [
        "Notices",
        "Announcements for students and parents."
    ],

    settings: [
        "Settings",
        "Configure your academy profile."
    ]

};


/* =========================================================
   INITIALS
========================================================= */

function getInitials(name) {

    return name
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();

}


/* =========================================================
   SAVE STUDENTS
========================================================= */

function saveStudents() {

    localStorage.setItem(
        "edu_students",
        JSON.stringify(students)
    );

}


/* =========================================================
   STUDENT ROW
========================================================= */

function studentRow(student) {

    return `

        <tr>

            <td>

                <div class="student">

                    <div class="student-avatar">
                        ${getInitials(student.name)}
                    </div>

                    <div>

                        <strong>
                            ${student.name}
                        </strong>

                        <small>
                            ${student.id}
                        </small>

                    </div>

                </div>

            </td>

            <td>
                ${student.id}
            </td>

            <td>
                ${student.class}
            </td>

            <td>
                ${student.phone}
            </td>

            <td>

                <span class="badge ${student.fee.toLowerCase()}">
                    ${student.fee}
                </span>

            </td>

            <td>

                <span class="badge active">
                    ${student.status}
                </span>

            </td>

            <td>

                <button
                    class="link-btn"
                    onclick="viewStudent('${student.id}')"
                >
                    View
                </button>

                <button
                    class="link-btn"
                    onclick="deleteStudent('${student.id}')"
                    style="color:#d96849;margin-left:8px;"
                >
                    Delete
                </button>

            </td>

        </tr>

    `;

}


/* =========================================================
   RENDER STUDENTS
========================================================= */

function renderStudents(list = students) {

    const table =
        document.getElementById("studentsTable");

    const recent =
        document.getElementById("recentStudents");


    if (table) {

        if (!list.length) {

            table.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align:center;padding:30px;">
                        No students found.
                    </td>
                </tr>
            `;

        } else {

            table.innerHTML =
                list.map(studentRow).join("");

        }

    }


    if (recent) {

        recent.innerHTML = students
            .slice(0, 5)
            .map((student, index) => {

                return `

                    <tr>

                        <td>

                            <div class="student">

                                <div class="student-avatar">
                                    ${getInitials(student.name)}
                                </div>

                                <div>

                                    <strong>
                                        ${student.name}
                                    </strong>

                                    <small>
                                        ${student.id}
                                    </small>

                                </div>

                            </div>

                        </td>

                        <td>
                            ${student.class}
                        </td>

                        <td>
                            Sep ${Math.max(1, 22 - index)}
                        </td>

                        <td>

                            <span class="badge ${student.fee.toLowerCase()}">
                                ${student.fee}
                            </span>

                        </td>

                        <td>

                            <span class="badge active">
                                ${student.status}
                            </span>

                        </td>

                    </tr>

                `;

            })
            .join("");

    }


    updateDashboardStats();

}


/* =========================================================
   DASHBOARD STATS
========================================================= */

function updateDashboardStats() {

    const statCards =
        document.querySelectorAll(".stat-card");

    if (!statCards.length) return;


    const studentCard =
        [...statCards].find(card =>
            card.innerText.includes("Total Students")
        );


    if (studentCard) {

        const number =
            studentCard.querySelector("strong");

        if (number) {
            number.textContent = students.length;
        }

    }


    const teacherCard =
        [...statCards].find(card =>
            card.innerText.includes("Total Teachers")
        );


    if (teacherCard) {

        const number =
            teacherCard.querySelector("strong");

        if (number) {
            number.textContent = teachers.length;
        }

    }

}


/* =========================================================
   VIEW STUDENT
========================================================= */

function viewStudent(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    showToast(
        `${student.name} • ${student.class} • ${student.phone}`
    );

}


/* =========================================================
   DELETE STUDENT
========================================================= */

function deleteStudent(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    const confirmDelete =
        confirm(
            `Delete ${student.name} from students?`
        );


    if (!confirmDelete) return;


    students =
        students.filter(item => item.id !== id);


    saveStudents();

    renderStudents();

    renderAttendance();

    renderFees();

    showToast("Student deleted successfully");

}


/* =========================================================
   TEACHERS
========================================================= */

function renderTeachers() {

    const grid =
        document.getElementById("teacherGrid");

    if (!grid) return;


    grid.innerHTML =
        teachers.map(teacher => {

            return `

                <article class="teacher-card">

                    <div class="teacher-top">

                        <div class="teacher-avatar">
                            ${teacher.initials}
                        </div>

                        <div>

                            <h3>
                                ${teacher.name}
                            </h3>

                            <p>
                                ${teacher.subject}
                            </p>

                        </div>

                    </div>

                    <div class="teacher-info">

                        <span>
                            ◷ Experience:
                            <b>${teacher.exp}</b>
                        </span>

                        <span>
                            ▦ Classes:
                            <b>${teacher.classes}</b>
                        </span>

                        <span>
                            ✉
                            ${teacher.name
                                .toLowerCase()
                                .replaceAll(" ", ".")
                            }@academy.com
                        </span>

                    </div>

                </article>

            `;

        }).join("");

}


/* =========================================================
   ADD TEACHER
========================================================= */

function addTeacher() {

    showToast(
        "Teacher module is ready for backend integration"
    );

}


/* =========================================================
   ATTENDANCE DATA
========================================================= */

let attendanceState =
    JSON.parse(localStorage.getItem("edu_attendance")) || {};


/* =========================================================
   RENDER ATTENDANCE
========================================================= */

function renderAttendance() {

    const table =
        document.getElementById("attendanceTable");

    if (!table) return;


    table.innerHTML =
        students.slice(0, 24)
            .map((student, index) => {

                const saved =
                    attendanceState[student.id];

                const isPresent =
                    saved !== undefined
                        ? saved
                        : index !== 3 && index !== 7;


                return `

                    <tr>

                        <td>

                            <div class="student">

                                <div class="student-avatar">
                                    ${getInitials(student.name)}
                                </div>

                                <strong>
                                    ${student.name}
                                </strong>

                            </div>

                        </td>

                        <td>
                            ${student.id}
                        </td>

                        <td>

                            <span class="badge ${isPresent ? "present" : "absent"}">

                                ${isPresent ? "Present" : "Absent"}

                            </span>

                        </td>

                        <td>

                            <button
                                class="link-btn"
                                onclick="toggleAttendance('${student.id}')"
                            >

                                ${
                                    isPresent
                                        ? "Mark Absent"
                                        : "Mark Present"
                                }

                            </button>

                        </td>

                    </tr>

                `;

            })
            .join("");


    updateAttendanceCount();

}


/* =========================================================
   TOGGLE ATTENDANCE
========================================================= */

function toggleAttendance(id) {

    const current =
        attendanceState[id];

    attendanceState[id] =
        current === undefined
            ? false
            : !current;


    localStorage.setItem(
        "edu_attendance",
        JSON.stringify(attendanceState)
    );


    renderAttendance();

    showToast("Attendance updated");

}


/* =========================================================
   ATTENDANCE COUNT
========================================================= */

function updateAttendanceCount() {

    const count =
        document.querySelector(".attendance-count");

    if (!count) return;


    const list =
        students.slice(0, 24);


    let present = 0;


    list.forEach((student, index) => {

        const saved =
            attendanceState[student.id];

        const isPresent =
            saved !== undefined
                ? saved
                : index !== 3 && index !== 7;


        if (isPresent) {
            present++;
        }

    });


    count.innerHTML =
        `Present: <b>${present}</b> / ${list.length}`;

}


/* =========================================================
   SAVE ATTENDANCE
========================================================= */

function saveAttendance() {

    localStorage.setItem(
        "edu_attendance",
        JSON.stringify(attendanceState)
    );

    showToast(
        "Attendance saved successfully"
    );

}


/* =========================================================
   FEES
========================================================= */

function renderFees() {

    const table =
        document.getElementById("feesTable");

    if (!table) return;


    table.innerHTML =
        students.map((student, index) => {

            const amount =
                index % 3 === 0
                    ? 2500
                    : 3000;


            return `

                <tr>

                    <td>

                        <div class="student">

                            <div class="student-avatar">
                                ${getInitials(student.name)}
                            </div>

                            <strong>
                                ${student.name}
                            </strong>

                        </div>

                    </td>

                    <td>
                        ${student.class}
                    </td>

                    <td>
                        ₨ ${amount.toLocaleString()}
                    </td>

                    <td>
                        Sep ${5 + index}
                    </td>

                    <td>

                        <span class="badge ${student.fee.toLowerCase()}">
                            ${student.fee}
                        </span>

                    </td>

                    <td>

                        ${
                            student.fee === "Pending"

                                ?

                                `
                                <button
                                    class="link-btn"
                                    onclick="markFeePaid('${student.id}')"
                                >
                                    Mark Paid
                                </button>
                                `

                                :

                                `
                                <button
                                    class="link-btn"
                                    onclick="generateReceipt('${student.id}')"
                                >
                                    Receipt
                                </button>
                                `
                        }

                    </td>

                </tr>

            `;

        }).join("");

}


/* =========================================================
   MARK FEE PAID
========================================================= */

function markFeePaid(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    student.fee = "Paid";

    saveStudents();

    renderStudents();

    renderFees();

    showToast(
        `${student.name}'s fee marked as paid`
    );

}


/* =========================================================
   RECEIPT
========================================================= */

function generateReceipt(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    const amount = 3000;


    showToast(
        `Receipt generated for ${student.name} • ₨${amount.toLocaleString()}`
    );

}


/* =========================================================
   RECORD PAYMENT
========================================================= */

function recordPayment() {

    const pending =
        students.find(
            student => student.fee === "Pending"
        );


    if (!pending) {

        showToast(
            "No pending fees found"
        );

        return;

    }


    markFeePaid(pending.id);

}


/* =========================================================
   RESULTS
========================================================= */

function renderResults() {

    const table =
        document.getElementById("resultsTable");

    if (!table) return;


    table.innerHTML =
        results.map(result => {

            return `

                <tr>

                    <td>
                        ${result.name}
                    </td>

                    <td>
                        ${result.class}
                    </td>

                    <td>
                        ${result.math}
                    </td>

                    <td>
                        ${result.english}
                    </td>

                    <td>
                        ${result.science}
                    </td>

                    <td>
                        ${result.percentage}
                    </td>

                    <td>

                        <span class="badge active">
                            ${result.grade}
                        </span>

                    </td>

                </tr>

            `;

        }).join("");

}


/* =========================================================
   RESULT ENTRY
========================================================= */

function enterMarks() {

    showToast(
        "Result entry module is ready"
    );

}


/* =========================================================
   NOTICES
========================================================= */

function createNotice() {

    const title =
        prompt("Enter notice title:");

    if (!title) return;


    const message =
        prompt("Enter notice message:");

    if (!message) return;


    const grid =
        document.querySelector(".notice-grid");

    if (!grid) return;


    const article =
        document.createElement("article");


    article.className =
        "notice-card";


    article.innerHTML = `

        <span class="notice-tag">
            General
        </span>

        <h3>
            ${title}
        </h3>

        <p>
            ${message}
        </p>

        <small>
            Posted just now · Admin
        </small>

    `;


    grid.prepend(article);


    showToast(
        "Notice created successfully"
    );

}


/* =========================================================
   SETTINGS
========================================================= */

function saveSettings() {

    const inputs =
        document.querySelectorAll(
            ".settings input, .settings textarea"
        );


    const settings = {};


    inputs.forEach((input, index) => {

        settings[index] =
            input.value;

    });


    localStorage.setItem(
        "edu_settings",
        JSON.stringify(settings)
    );


    showToast(
        "Settings saved successfully"
    );

}


/* =========================================================
   LOAD SETTINGS
========================================================= */

function loadSettings() {

    const saved =
        JSON.parse(
            localStorage.getItem("edu_settings")
        );


    if (!saved) return;


    const inputs =
        document.querySelectorAll(
            ".settings input, .settings textarea"
        );


    inputs.forEach((input, index) => {

        if (saved[index] !== undefined) {

            input.value =
                saved[index];

        }

    });

}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function setPage(page) {

    const target =
        document.getElementById(page);


    if (!target) {

        showToast(
            "Page not found"
        );

        return;

    }


    document
        .querySelectorAll(".page")
        .forEach(item => {

            item.classList.remove("active");

        });


    target.classList.add("active");


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.page === page
            );

        });


    if (pageData[page]) {

        document.getElementById("pageTitle")
            .textContent =
            pageData[page][0];


        document.getElementById("pageSubtitle")
            .textContent =
            pageData[page][1];

    }


    document
        .getElementById("sidebar")
        .classList.remove("open");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   NAVIGATION BUTTONS
========================================================= */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setPage(
                    button.dataset.page
                );

            }
        );

    });


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        () => {

            document
                .getElementById("sidebar")
                .classList.toggle("open");

        }
    );

}


/* =========================================================
   ADD STUDENT MODAL
========================================================= */

function openModal() {

    document
        .getElementById("studentModal")
        .classList.add("show");

    setTimeout(() => {

        document
            .getElementById("newName")
            ?.focus();

    }, 100);

}


function closeModal() {

    document
        .getElementById("studentModal")
        .classList.remove("show");

}


/* =========================================================
   ADD STUDENT
========================================================= */

const studentForm =
    document.getElementById("studentForm");


if (studentForm) {

    studentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("newName")
                    .value
                    .trim();


            if (!name) {

                showToast(
                    "Please enter student name"
                );

                return;

            }


            const newStudent = {

                name: name,

                id:
                    "ST-" +
                    (
                        1025 +
                        students.length
                    ),

                class:
                    document
                        .getElementById("newClass")
                        .value,

                phone:
                    document
                        .getElementById("newPhone")
                        .value
                        .trim() || "—",

                fee:
                    document
                        .getElementById("newFee")
                        .value,

                status: "Active"

            };


            students.unshift(
                newStudent
            );


            saveStudents();


            renderStudents();

            renderAttendance();

            renderFees();


            closeModal();


            this.reset();


            showToast(
                `${name} added successfully`
            );

        }
    );

}


/* =========================================================
   MODAL OUTSIDE CLICK
========================================================= */

const studentModal =
    document.getElementById("studentModal");


if (studentModal) {

    studentModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                studentModal
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   STUDENT SEARCH
========================================================= */

const studentSearch =
    document.getElementById("studentSearch");


if (studentSearch) {

    studentSearch.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            const filtered =
                students.filter(student => {

                    return (

                        student.name +
                        " " +
                        student.id +
                        " " +
                        student.class +
                        " " +
                        student.phone

                    )
                    .toLowerCase()
                    .includes(search);

                });


            renderStudents(
                filtered
            );

        }
    );

}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

const globalSearch =
    document.getElementById("globalSearch");


if (globalSearch) {

    globalSearch.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .trim()
                    .toLowerCase();


            if (!search) {

                return;

            }


            setPage("students");


            const studentInput =
                document.getElementById(
                    "studentSearch"
                );


            studentInput.value =
                search;


            studentInput.dispatchEvent(
                new Event("input")
            );

        }
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   FIX EXISTING BUTTONS IN HTML
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* Add Teacher */
        const teacherButton =
            document.querySelector(
                "#teachers .primary-btn"
            );

        if (teacherButton) {

            teacherButton.onclick =
                addTeacher;

        }


        /* Save Attendance */
        const attendanceButton =
            document.querySelector(
                "#attendance .primary-btn"
            );

        if (attendanceButton) {

            attendanceButton.onclick =
                saveAttendance;

        }


        /* Record Payment */
        const paymentButton =
            document.querySelector(
                "#fees .primary-btn"
            );

        if (paymentButton) {

            paymentButton.onclick =
                recordPayment;

        }


        /* Enter Marks */
        const marksButton =
            document.querySelector(
                "#results .primary-btn"
            );

        if (marksButton) {

            marksButton.onclick =
                enterMarks;

        }


        /* Create Notice */
        const noticeButton =
            document.querySelector(
                "#notices .primary-btn"
            );

        if (noticeButton) {

            noticeButton.onclick =
                createNotice;

        }


        /* Save Settings */
        const settingsButton =
            document.querySelector(
                "#settings .primary-btn"
            );

        if (settingsButton) {

            settingsButton.onclick =
                saveSettings;

        }


        /* Load saved settings */
        loadSettings();

    }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

renderStudents();

renderTeachers();

renderAttendance();

renderFees();

renderResults();

loadSettings();
