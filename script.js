/* =========================================================
   EDUMANAGE PRO
   COMPLETE WORKING JAVASCRIPT
========================================================= */


/* =========================================================
   STORAGE HELPERS
========================================================= */

function getStorage(key, fallback) {

    try {

        const data = localStorage.getItem(key);

        return data
            ? JSON.parse(data)
            : fallback;

    } catch (error) {

        console.error(error);

        return fallback;

    }

}


function saveStorage(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}


/* =========================================================
   DEFAULT STUDENTS
========================================================= */

let students = getStorage("edu_students", [

    {
        name: "Ayaan Khan",
        id: "ST-1024",
        class: "Grade 10",
        phone: "0301-4587210",
        fee: "Paid",
        feeAmount: 3000,
        status: "Active",
        joined: "Sep 22, 2026"
    },

    {
        name: "Hania Ahmed",
        id: "ST-1023",
        class: "Grade 9",
        phone: "0312-7784512",
        fee: "Paid",
        feeAmount: 3000,
        status: "Active",
        joined: "Sep 21, 2026"
    },

    {
        name: "Muhammad Huzaifa",
        id: "ST-1022",
        class: "Grade 11",
        phone: "0333-1826401",
        fee: "Pending",
        feeAmount: 3000,
        status: "Active",
        joined: "Sep 20, 2026"
    },

    {
        name: "Eman Fatima",
        id: "ST-1021",
        class: "Grade 10",
        phone: "0300-6642319",
        fee: "Paid",
        feeAmount: 2500,
        status: "Active",
        joined: "Sep 19, 2026"
    },

    {
        name: "Abdullah Raza",
        id: "ST-1020",
        class: "Grade 9",
        phone: "0345-9012788",
        fee: "Pending",
        feeAmount: 3000,
        status: "Active",
        joined: "Sep 18, 2026"
    },

    {
        name: "Maham Noor",
        id: "ST-1019",
        class: "Grade 12",
        phone: "0321-5538124",
        fee: "Paid",
        feeAmount: 3500,
        status: "Active",
        joined: "Sep 17, 2026"
    },

    {
        name: "Saad Ali",
        id: "ST-1018",
        class: "Grade 10",
        phone: "0308-4412876",
        fee: "Paid",
        feeAmount: 3000,
        status: "Active",
        joined: "Sep 16, 2026"
    },

    {
        name: "Zoya Siddiqui",
        id: "ST-1017",
        class: "Grade 11",
        phone: "0315-7721038",
        fee: "Pending",
        feeAmount: 3000,
        status: "Active",
        joined: "Sep 15, 2026"
    }

]);


/* =========================================================
   TEACHERS
========================================================= */

let teachers = getStorage("edu_teachers", [

    {
        name: "Sarah Ahmed",
        subject: "Mathematics",
        exp: "6 Years",
        classes: "Grade 9–12",
        email: "sarah.ahmed@academy.com",
        initials: "SA"
    },

    {
        name: "Usman Tariq",
        subject: "English",
        exp: "4 Years",
        classes: "Grade 8–10",
        email: "usman.tariq@academy.com",
        initials: "UT"
    },

    {
        name: "Areeba Khan",
        subject: "Computer Science",
        exp: "5 Years",
        classes: "Grade 9–12",
        email: "areeba.khan@academy.com",
        initials: "AK"
    },

    {
        name: "Hamza Malik",
        subject: "Physics",
        exp: "7 Years",
        classes: "Grade 10–12",
        email: "hamza.malik@academy.com",
        initials: "HM"
    },

    {
        name: "Sana Noor",
        subject: "Chemistry",
        exp: "3 Years",
        classes: "Grade 10–12",
        email: "sana.noor@academy.com",
        initials: "SN"
    },

    {
        name: "Bilal Ahmed",
        subject: "Biology",
        exp: "5 Years",
        classes: "Grade 9–12",
        email: "bilal.ahmed@academy.com",
        initials: "BA"
    }

]);


/* =========================================================
   RESULTS
========================================================= */

let results = getStorage("edu_results", [

    {
        name: "Ayaan Khan",
        studentId: "ST-1024",
        class: "Grade 10",
        math: 92,
        english: 88,
        science: 90,
        percentage: 90,
        grade: "A+"
    },

    {
        name: "Hania Ahmed",
        studentId: "ST-1023",
        class: "Grade 9",
        math: 86,
        english: 91,
        science: 84,
        percentage: 87,
        grade: "A"
    },

    {
        name: "Eman Fatima",
        studentId: "ST-1021",
        class: "Grade 10",
        math: 82,
        english: 89,
        science: 87,
        percentage: 86,
        grade: "A"
    },

    {
        name: "Maham Noor",
        studentId: "ST-1019",
        class: "Grade 12",
        math: 95,
        english: 93,
        science: 91,
        percentage: 93,
        grade: "A+"
    }

]);


/* =========================================================
   ATTENDANCE
========================================================= */

let attendanceState =
    getStorage("edu_attendance", {});


/* =========================================================
   PAYMENTS
========================================================= */

let payments =
    getStorage("edu_payments", []);


/* =========================================================
   NOTICES
========================================================= */

let notices =
    getStorage("edu_notices", [

        {
            id: Date.now() - 3,
            title: "Monthly Test Schedule",
            category: "Exam",
            message: "Monthly tests will begin from October 1. Students are requested to prepare according to the announced schedule.",
            date: "Sep 22, 2026"
        },

        {
            id: Date.now() - 2,
            title: "Fee Submission Reminder",
            category: "Fee",
            message: "Please ensure that monthly academy fees are submitted before the due date.",
            date: "Sep 21, 2026"
        },

        {
            id: Date.now() - 1,
            title: "Parent Teacher Meeting",
            category: "Important",
            message: "Parent teacher meeting will be held this Saturday from 10:00 AM to 1:00 PM.",
            date: "Sep 20, 2026"
        }

    ]);


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

    return String(name)
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();

}


/* =========================================================
   STUDENT ID
========================================================= */

function generateStudentId() {

    const numbers = students
        .map(student => {
            const number = parseInt(
                String(student.id).replace("ST-", "")
            );

            return isNaN(number) ? 0 : number;
        });

    const highest =
        numbers.length
            ? Math.max(...numbers)
            : 1000;

    return `ST-${highest + 1}`;

}


/* =========================================================
   SAVE ALL
========================================================= */

function saveStudents() {
    saveStorage("edu_students", students);
}

function saveTeachers() {
    saveStorage("edu_teachers", teachers);
}

function saveResults() {
    saveStorage("edu_results", results);
}

function saveNotices() {
    saveStorage("edu_notices", notices);
}

function saveAttendanceData() {
    saveStorage("edu_attendance", attendanceState);
}

function savePayments() {
    saveStorage("edu_payments", payments);
}


/* =========================================================
   FORMAT MONEY
========================================================= */

function money(amount) {

    return `₨ ${Number(amount || 0).toLocaleString()}`;

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

                        <strong>${escapeHTML(student.name)}</strong>

                        <small>${student.id}</small>

                    </div>

                </div>

            </td>

            <td>${student.id}</td>

            <td>${escapeHTML(student.class)}</td>

            <td>${escapeHTML(student.phone || "—")}</td>

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
                    class="link-btn danger"
                    onclick="deleteStudent('${student.id}')"
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
                    <td colspan="7">
                        <div class="empty-state">
                            <strong>No students found</strong>
                            Try changing your search or filter.
                        </div>
                    </td>
                </tr>
            `;

        } else {

            table.innerHTML =
                list.map(studentRow).join("");

        }

    }


    if (recent) {

        recent.innerHTML =
            students.slice(0, 5).map(student => `

                <tr>

                    <td>

                        <div class="student">

                            <div class="student-avatar">
                                ${getInitials(student.name)}
                            </div>

                            <div>

                                <strong>
                                    ${escapeHTML(student.name)}
                                </strong>

                                <small>
                                    ${student.id}
                                </small>

                            </div>

                        </div>

                    </td>

                    <td>${student.class}</td>

                    <td>${student.joined || "Recently"}</td>

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

            `).join("");

    }


    updateDashboardStats();

}


/* =========================================================
   DASHBOARD STATS
========================================================= */

function updateDashboardStats() {

    const totalStudents =
        document.getElementById("totalStudents");

    const totalTeachers =
        document.getElementById("totalTeachers");

    if (totalStudents)
        totalStudents.textContent = students.length;

    if (totalTeachers)
        totalTeachers.textContent = teachers.length;


    updateAttendanceCount();

    updateFeeStats();

}


/* =========================================================
   VIEW STUDENT
========================================================= */

function viewStudent(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    const modal =
        document.getElementById("viewStudentModal");

    const details =
        document.getElementById("studentDetails");


    details.innerHTML = `

        <div class="student-detail">

            <div class="student-detail-top">

                <div class="student-detail-avatar">
                    ${getInitials(student.name)}
                </div>

                <div>

                    <h3>${escapeHTML(student.name)}</h3>

                    <p>
                        ${student.id} • ${student.class}
                    </p>

                </div>

            </div>


            <div class="detail-grid">

                <div class="detail-item">
                    <span>Student ID</span>
                    <strong>${student.id}</strong>
                </div>

                <div class="detail-item">
                    <span>Class</span>
                    <strong>${student.class}</strong>
                </div>

                <div class="detail-item">
                    <span>Phone</span>
                    <strong>${student.phone}</strong>
                </div>

                <div class="detail-item">
                    <span>Fee Status</span>
                    <strong>${student.fee}</strong>
                </div>

                <div class="detail-item">
                    <span>Monthly Fee</span>
                    <strong>${money(student.feeAmount)}</strong>
                </div>

                <div class="detail-item">
                    <span>Status</span>
                    <strong>${student.status}</strong>
                </div>

            </div>

        </div>

    `;


    modal.classList.add("show");

}


function closeViewStudent() {

    document
        .getElementById("viewStudentModal")
        .classList.remove("show");

}


/* =========================================================
   DELETE STUDENT
========================================================= */

function deleteStudent(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    if (!confirm(
        `Delete ${student.name} from students?`
    )) return;


    students =
        students.filter(item => item.id !== id);


    delete attendanceState[id];

    results =
        results.filter(item => item.studentId !== id);


    saveStudents();
    saveAttendanceData();
    saveResults();

    renderStudents();
    renderAttendance();
    renderFees();
    renderResults();

    showToast("Student deleted successfully");

}


/* =========================================================
   TEACHERS
========================================================= */

function renderTeachers() {

    const grid =
        document.getElementById("teacherGrid");

    if (!grid) return;


    if (!teachers.length) {

        grid.innerHTML = `
            <div class="panel">
                <div class="empty-state">
                    <strong>No teachers added</strong>
                    Add your first teacher.
                </div>
            </div>
        `;

        return;

    }


    grid.innerHTML =
        teachers.map((teacher, index) => `

            <article class="teacher-card">

                <div class="teacher-top">

                    <div class="teacher-avatar">
                        ${getInitials(teacher.name)}
                    </div>

                    <div>

                        <h3>
                            ${escapeHTML(teacher.name)}
                        </h3>

                        <p>
                            ${escapeHTML(teacher.subject)}
                        </p>

                    </div>

                </div>

                <div class="teacher-info">

                    <span>
                        ◷ Experience:
                        <b>${escapeHTML(teacher.exp || "—")}</b>
                    </span>

                    <span>
                        ▦ Classes:
                        <b>${escapeHTML(teacher.classes || "—")}</b>
                    </span>

                    <span>
                        ✉ ${escapeHTML(teacher.email || "—")}
                    </span>

                    <div>

                        <button
                            class="link-btn danger"
                            onclick="deleteTeacher(${index})"
                        >
                            Delete Teacher
                        </button>

                    </div>

                </div>

            </article>

        `).join("");

}


/* =========================================================
   TEACHER MODAL
========================================================= */

function openTeacherModal() {

    document
        .getElementById("teacherModal")
        .classList.add("show");

}


function closeTeacherModal() {

    document
        .getElementById("teacherModal")
        .classList.remove("show");

}


function deleteTeacher(index) {

    const teacher = teachers[index];

    if (!teacher) return;


    if (!confirm(
        `Delete ${teacher.name}?`
    )) return;


    teachers.splice(index, 1);

    saveTeachers();

    renderTeachers();

    updateDashboardStats();

    showToast("Teacher deleted successfully");

}


/* =========================================================
   ATTENDANCE
========================================================= */

function attendanceKey(date, studentId) {

    return `${date}_${studentId}`;

}


function getAttendanceStatus(student, index) {

    const date =
        document.getElementById("attendanceDate")?.value ||
        getToday();


    const key =
        attendanceKey(date, student.id);


    if (attendanceState[key] !== undefined) {

        return attendanceState[key];

    }


    return index !== 3 && index !== 7;

}


function renderAttendance() {

    const table =
        document.getElementById("attendanceTable");

    if (!table) return;


    const classFilter =
        document.getElementById("attendanceClass")?.value || "";


    const list =
        students.filter(student => {

            return !classFilter ||
                student.class === classFilter;

        });


    if (!list.length) {

        table.innerHTML = `
            <tr>
                <td colspan="4">
                    <div class="empty-state">
                        <strong>No students found</strong>
                    </div>
                </td>
            </tr>
        `;

        updateAttendanceCount();

        return;

    }


    table.innerHTML =
        list.map((student, index) => {

            const present =
                getAttendanceStatus(student, index);


            return `

                <tr>

                    <td>

                        <div class="student">

                            <div class="student-avatar">
                                ${getInitials(student.name)}
                            </div>

                            <strong>
                                ${escapeHTML(student.name)}
                            </strong>

                        </div>

                    </td>

                    <td>${student.id}</td>

                    <td>

                        <span class="badge ${
                            present
                                ? "present"
                                : "absent"
                        }">

                            ${
                                present
                                    ? "Present"
                                    : "Absent"
                            }

                        </span>

                    </td>

                    <td>

                        <button
                            class="link-btn"
                            onclick="toggleAttendance('${student.id}')"
                        >

                            ${
                                present
                                    ? "Mark Absent"
                                    : "Mark Present"
                            }

                        </button>

                    </td>

                </tr>

            `;

        }).join("");


    updateAttendanceCount();

}


function toggleAttendance(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    const date =
        document.getElementById("attendanceDate")?.value ||
        getToday();


    const key =
        attendanceKey(date, id);


    const current =
        getAttendanceStatus(
            student,
            students.indexOf(student)
        );


    attendanceState[key] = !current;

    saveAttendanceData();

    renderAttendance();

    updateDashboardStats();

}


function updateAttendanceCount() {

    const count =
        document.querySelector(".attendance-count");

    if (!count) return;


    const classFilter =
        document.getElementById("attendanceClass")?.value || "";


    const list =
        students.filter(student => {

            return !classFilter ||
                student.class === classFilter;

        });


    let present = 0;


    list.forEach((student, index) => {

        if (getAttendanceStatus(student, index)) {
            present++;
        }

    });


    const percentage =
        list.length
            ? Math.round((present / list.length) * 100)
            : 0;


    count.innerHTML =
        `Present: <b>${present}</b> / ${list.length}`;


    const percentageElement =
        document.getElementById(
            "attendancePercentage"
        );


    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }

}


function saveAttendance() {

    saveAttendanceData();

    showToast(
        "Attendance saved successfully"
    );

}


/* =========================================================
   FEES
========================================================= */

function getFeeAmount(student) {

    return Number(
        student.feeAmount || 3000
    );

}


/* =========================================================
   FEES
========================================================= */

function getFeeAmount(student) {

    return Number(
        student.feeAmount || 3000
    );

}


function renderFees() {

    const table =
        document.getElementById("feesTable");

    if (!table) return;


    if (!students.length) {

        table.innerHTML = `
            <tr>
                <td colspan="6">
                    <div class="empty-state">
                        <strong>No students found</strong>
                    </div>
                </td>
            </tr>
        `;

        updateFeeStats();

        return;

    }


    table.innerHTML =
        students.map((student, index) => {

            const amount =
                getFeeAmount(student);

            const payment =
                [...payments]
                    .reverse()
                    .find(
                        item =>
                            item.studentId === student.id
                    );


            const paymentDate =
                payment?.date ||
                student.joined ||
                "—";


            return `

                <tr>

                    <td>

                        <div class="student">

                            <div class="student-avatar">
                                ${getInitials(student.name)}
                            </div>

                            <div>

                                <strong>
                                    ${escapeHTML(student.name)}
                                </strong>

                                <small>
                                    ${student.id}
                                </small>

                            </div>

                        </div>

                    </td>


                    <td>
                        ${escapeHTML(student.class)}
                    </td>


                    <td>
                        ${money(amount)}
                    </td>


                    <td>
                        ${escapeHTML(paymentDate)}
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
                                    style="color:#16a34a;"
                                >
                                    ✓ Mark Paid
                                </button>
                            `

                                :

                            `
                                <button
                                    class="link-btn"
                                    onclick="markFeeUnpaid('${student.id}')"
                                    style="color:#dc2626;"
                                >
                                    ✕ Mark Unpaid
                                </button>

                                <button
                                    class="link-btn"
                                    onclick="generateReceipt('${student.id}')"
                                    style="margin-left:10px;"
                                >
                                    Receipt
                                </button>
                            `
                        }

                    </td>

                </tr>

            `;

        }).join("");


    updateFeeStats();

}





function updateFeeStats() {

    let collected = 0;

    let pending = 0;


    students.forEach(student => {

        const amount =
            getFeeAmount(student);

        if (student.fee === "Paid") {

            collected += amount;

        } else {

            pending += amount;

        }

    });


    const total =
        collected + pending;


    const percentage =
        total
            ? Math.round((collected / total) * 100)
            : 0;


    const elements = {

        collected:
            document.getElementById("feeCollected"),

        pageCollected:
            document.getElementById("feesPageCollected"),

        pagePending:
            document.getElementById("feesPagePending"),

        pageTotal:
            document.getElementById("feesPageTotal"),

        percentage:
            document.getElementById("feePercentage"),

        paidCount:
            document.getElementById("paidCount"),

        pendingCount:
            document.getElementById("pendingCount"),

        total:
            document.getElementById("feeTotal")

    };


    if (elements.collected)
        elements.collected.textContent = money(collected);

    if (elements.pageCollected)
        elements.pageCollected.textContent = money(collected);

    if (elements.pagePending)
        elements.pagePending.textContent = money(pending);

    if (elements.pageTotal)
        elements.pageTotal.textContent = money(total);

    if (elements.percentage)
        elements.percentage.textContent = `${percentage}%`;

    if (elements.paidCount)
        elements.paidCount.textContent =
            students.filter(s => s.fee === "Paid").length;

    if (elements.pendingCount)
        elements.pendingCount.textContent =
            students.filter(s => s.fee === "Pending").length;

    if (elements.total)
        elements.total.textContent =
            students.length;


    const circle =
        document.querySelector(".fee-circle");

    if (circle) {

        circle.style.background =
            `conic-gradient(
                var(--primary) ${percentage * 3.6}deg,
                #eaf0f8 ${percentage * 3.6}deg
            )`;

    }

}


/* =========================================================
   MARK FEE PAID
========================================================= */

function markFeePaid(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    if (student.fee === "Paid") {

        showToast(
            `${student.name}'s fee is already paid`
        );

        return;

    }


    const amount =
        getFeeAmount(student);


    student.fee = "Paid";


    payments.push({

        id: Date.now(),

        studentId: student.id,

        studentName: student.name,

        amount,

        date: getToday()

    });


    saveStudents();

    savePayments();


    renderStudents();

    renderFees();

    updateDashboardStats();


    showToast(
        `${student.name}'s fee marked as paid`
    );

}


/* =========================================================
   MARK FEE UNPAID
========================================================= */

function markFeeUnpaid(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    if (student.fee === "Pending") {

        showToast(
            `${student.name}'s fee is already unpaid`
        );

        return;

    }


    if (!confirm(
        `Mark ${student.name}'s fee as unpaid?`
    )) {

        return;

    }


    student.fee = "Pending";


    saveStudents();


    renderStudents();

    renderFees();

    updateDashboardStats();


    showToast(
        `${student.name}'s fee marked as unpaid`
    );

}

/* =========================================================
   PAYMENT MODAL
========================================================= */

function openPaymentModal() {

    const select =
        document.getElementById("paymentStudent");


    select.innerHTML =
        students
            .filter(student => student.fee === "Pending")
            .map(student => `
                <option value="${student.id}">
                    ${escapeHTML(student.name)} — ${student.class}
                </option>
            `)
            .join("");


    if (!select.options.length) {

        showToast(
            "No pending fees found"
        );

        return;

    }


    document.getElementById("paymentAmount").value = 3000;

    document.getElementById("paymentDate").value =
        getToday();


    document
        .getElementById("paymentModal")
        .classList.add("show");

}


function closePaymentModal() {

    document
        .getElementById("paymentModal")
        .classList.remove("show");

}


function generateReceipt(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    const amount =
        getFeeAmount(student);


    const receiptWindow =
        window.open(
            "",
            "_blank",
            "width=600,height=700"
        );


    if (!receiptWindow) {

        showToast(
            "Please allow popups to print receipt"
        );

        return;

    }


    receiptWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>Fee Receipt - ${student.name}</title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    padding: 40px;
                    color: #172033;
                }

                .receipt {
                    max-width: 500px;
                    margin: auto;
                    border: 1px solid #ddd;
                    padding: 30px;
                }

                h1 {
                    margin: 0 0 5px;
                }

                .muted {
                    color: #777;
                }

                .row {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 0;
                    border-bottom: 1px solid #eee;
                }

                .total {
                    font-size: 20px;
                    font-weight: bold;
                }

                .paid {
                    color: green;
                    font-weight: bold;
                }

            </style>

        </head>

        <body>

            <div class="receipt">

                <h1>EduManage Academy</h1>

                <p class="muted">
                    Official Fee Receipt
                </p>

                <hr>

                <div class="row">
                    <span>Student</span>
                    <strong>${escapeHTML(student.name)}</strong>
                </div>

                <div class="row">
                    <span>Student ID</span>
                    <strong>${student.id}</strong>
                </div>

                <div class="row">
                    <span>Class</span>
                    <strong>${student.class}</strong>
                </div>

                <div class="row">
                    <span>Date</span>
                    <strong>${getToday()}</strong>
                </div>

                <div class="row total">
                    <span>Amount Paid</span>
                    <strong>${money(amount)}</strong>
                </div>

                <p class="paid">
                    PAYMENT STATUS: PAID
                </p>

                <p class="muted">
                    Thank you for your payment.
                </p>

            </div>

            <script>
                window.onload = function() {
                    window.print();
                };
            <\/script>

        </body>

        </html>

    `);

    receiptWindow.document.close();

}


/* =========================================================
   RESULTS
========================================================= */

function getGrade(percentage) {

    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";

    return "F";

}


function renderResults() {

    const table =
        document.getElementById("resultsTable");

    if (!table) return;


    if (!results.length) {

        table.innerHTML = `
            <tr>
                <td colspan="8">
                    <div class="empty-state">
                        <strong>No results entered</strong>
                        Add marks using the Enter Marks button.
                    </div>
                </td>
            </tr>
        `;

        updateResultStats();

        return;

    }


    table.innerHTML =
        results.map((result, index) => `

            <tr>

                <td>
                    <strong>
                        ${escapeHTML(result.name)}
                    </strong>
                </td>

                <td>${result.class}</td>

                <td>${result.math}</td>

                <td>${result.english}</td>

                <td>${result.science}</td>

                <td>
                    ${result.percentage}%
                </td>

                <td>

                    <span class="badge grade">
                        ${result.grade}
                    </span>

                </td>

                <td>

                    <button
                        class="link-btn danger"
                        onclick="deleteResult(${index})"
                    >
                        Delete
                    </button>

                </td>

            </tr>

        `).join("");


    updateResultStats();

}


function updateResultStats() {

    const average =
        results.length
            ? Math.round(
                results.reduce(
                    (sum, item) =>
                        sum + Number(item.percentage),
                    0
                ) / results.length
            )
            : 0;


    const aPlus =
        results.filter(
            result => result.grade === "A+"
        ).length;


    document.getElementById(
        "averagePercentage"
    ).textContent = `${average}%`;


    document.getElementById(
        "aPlusCount"
    ).textContent = aPlus;


    document.getElementById(
        "resultsCount"
    ).textContent = results.length;

}


function deleteResult(index) {

    if (!results[index]) return;


    if (!confirm("Delete this result?")) return;


    results.splice(index, 1);

    saveResults();

    renderResults();

    showToast("Result deleted");

}


/* =========================================================
   RESULT MODAL
========================================================= */

function openResultModal() {

    const select =
        document.getElementById("resultStudent");


    select.innerHTML =
        students.map(student => `

            <option value="${student.id}">
                ${escapeHTML(student.name)} — ${student.class}
            </option>

        `).join("");


    if (!students.length) {

        showToast("Add students first");

        return;

    }


    document
        .getElementById("resultModal")
        .classList.add("show");

}


function closeResultModal() {

    document
        .getElementById("resultModal")
        .classList.remove("show");

}


/* =========================================================
   NOTICES
========================================================= */

function renderNotices() {

    const grid =
        document.getElementById("noticeGrid");

    if (!grid) return;


    if (!notices.length) {

        grid.innerHTML = `
            <div class="panel">
                <div class="empty-state">
                    <strong>No notices</strong>
                    Create your first announcement.
                </div>
            </div>
        `;

        return;

    }


    grid.innerHTML =
        notices.map(notice => `

            <article class="notice-card">

                <button
                    class="notice-delete"
                    onclick="deleteNotice(${notice.id})"
                >
                    ×
                </button>

                <span class="notice-tag">
                    ${escapeHTML(notice.category)}
                </span>

                <h3>
                    ${escapeHTML(notice.title)}
                </h3>

                <p>
                    ${escapeHTML(notice.message)}
                </p>

                <small>
                    Posted ${escapeHTML(notice.date)} · Admin
                </small>

            </article>

        `).join("");

}


function openNoticeModal() {

    document
        .getElementById("noticeModal")
        .classList.add("show");

}


function closeNoticeModal() {

    document
        .getElementById("noticeModal")
        .classList.remove("show");

}


function deleteNotice(id) {

    if (!confirm("Delete this notice?")) return;


    notices =
        notices.filter(notice => notice.id !== id);


    saveNotices();

    renderNotices();

    showToast("Notice deleted");

}


/* =========================================================
   SETTINGS
========================================================= */

function saveSettings() {

    const settings = {

        academyName:
            document.getElementById("academyName").value.trim(),

        academyPhone:
            document.getElementById("academyPhone").value.trim(),

        academyEmail:
            document.getElementById("academyEmail").value.trim(),

        academyAddress:
            document.getElementById("academyAddress").value.trim()

    };


    saveStorage(
        "edu_settings",
        settings
    );


    updateAcademyPreview();

    showToast(
        "Settings saved successfully"
    );

}


function loadSettings() {

    const settings =
        getStorage("edu_settings", null);

    if (!settings) {

        updateAcademyPreview();

        return;

    }


    document.getElementById("academyName").value =
        settings.academyName || "";

    document.getElementById("academyPhone").value =
        settings.academyPhone || "";

    document.getElementById("academyEmail").value =
        settings.academyEmail || "";

    document.getElementById("academyAddress").value =
        settings.academyAddress || "";


    updateAcademyPreview();

}


function updateAcademyPreview() {

    const name =
        document.getElementById("academyName")?.value ||
        "EduManage Academy";

    const phone =
        document.getElementById("academyPhone")?.value ||
        "0300-1234567";

    const email =
        document.getElementById("academyEmail")?.value ||
        "info@edumanage.pk";

    const address =
        document.getElementById("academyAddress")?.value ||
        "Karachi, Pakistan";


    document.getElementById(
        "previewAcademyName"
    ).textContent = name;

    document.getElementById(
        "previewPhone"
    ).textContent = `☎ ${phone}`;

    document.getElementById(
        "previewEmail"
    ).textContent = `✉ ${email}`;

    document.getElementById(
        "previewAddress"
    ).textContent = `⌖ ${address}`;

}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function setPage(page) {

    const target =
        document.getElementById(page);

    if (!target) return;


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

        document.getElementById(
            "pageTitle"
        ).textContent = pageData[page][0];


        document.getElementById(
            "pageSubtitle"
        ).textContent = pageData[page][1];

    }


    document
        .getElementById("sidebar")
        ?.classList.remove("open");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   STUDENT MODAL
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
   STUDENT FORM
========================================================= */

function setupStudentForm() {

    const form =
        document.getElementById("studentForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "newName"
                ).value.trim();


            const studentClass =
                document.getElementById(
                    "newClass"
                ).value;


            const phone =
                document.getElementById(
                    "newPhone"
                ).value.trim();


            const fee =
                document.getElementById(
                    "newFee"
                ).value;

                const feeAmount =
    Number(
        document.getElementById(
            "newFeeAmount"
        )?.value
    ) || 3000;


            if (!name || !studentClass) {

                showToast(
                    "Please fill required fields"
                );

                return;

            }


            const newStudent = {

                name,

                id: generateStudentId(),

                class: studentClass,

                phone: phone || "—",

                fee,

                feeAmount,

                status: "Active",

                joined: formatDate(
                    new Date()
                )

            };


            students.unshift(
                newStudent
            );


            saveStudents();

            renderStudents();

            renderAttendance();

            renderFees();

            updateDashboardStats();


            closeModal();

            form.reset();


            showToast(
                `${name} added successfully`
            );

        }
    );

}


/* =========================================================
   TEACHER FORM
========================================================= */

function setupTeacherForm() {

    const form =
        document.getElementById("teacherForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "teacherName"
                ).value.trim();


            const subject =
                document.getElementById(
                    "teacherSubject"
                ).value.trim();


            if (!name || !subject) {

                showToast(
                    "Name and subject are required"
                );

                return;

            }


            teachers.push({

                name,

                subject,

                exp:
                    document.getElementById(
                        "teacherExperience"
                    ).value.trim() || "Not specified",

                classes:
                    document.getElementById(
                        "teacherClasses"
                    ).value.trim() || "Not specified",

                email:
                    document.getElementById(
                        "teacherEmail"
                    ).value.trim() ||
                    `${name.toLowerCase().replace(/\s+/g, ".")}@academy.com`,

                initials:
                    getInitials(name)

            });


            saveTeachers();

            renderTeachers();

            updateDashboardStats();

            closeTeacherModal();

            form.reset();

            showToast(
                `${name} added successfully`
            );

        }
    );

}


/* =========================================================
   PAYMENT FORM
========================================================= */

function setupPaymentForm() {

    const form =
        document.getElementById("paymentForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const studentId =
                document.getElementById(
                    "paymentStudent"
                ).value;


            const amount =
                Number(
                    document.getElementById(
                        "paymentAmount"
                    ).value
                );


            const student =
                students.find(
                    item => item.id === studentId
                );


            if (!student) {

                showToast(
                    "Please select a student"
                );

                return;

            }


            student.fee = "Paid";

            student.feeAmount =
                amount || 3000;


            payments.push({

                id: Date.now(),

                studentId: student.id,

                studentName: student.name,

                amount: amount || 3000,

                date:
                    document.getElementById(
                        "paymentDate"
                    ).value ||
                    getToday()

            });


            saveStudents();

            savePayments();

            renderStudents();

            renderFees();

            updateDashboardStats();

            closePaymentModal();

            form.reset();

            showToast(
                `Payment recorded for ${student.name}`
            );

        }
    );

}


/* =========================================================
   RESULT FORM
========================================================= */

function setupResultForm() {

    const form =
        document.getElementById("resultForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const studentId =
                document.getElementById(
                    "resultStudent"
                ).value;


            const student =
                students.find(
                    item => item.id === studentId
                );


            if (!student) return;


            const math =
                Number(
                    document.getElementById(
                        "resultMath"
                    ).value
                );


            const english =
                Number(
                    document.getElementById(
                        "resultEnglish"
                    ).value
                );


            const science =
                Number(
                    document.getElementById(
                        "resultScience"
                    ).value
                );


            const percentage =
                Math.round(
                    (math + english + science) / 3
                );


            const grade =
                getGrade(percentage);


            const existingIndex =
                results.findIndex(
                    result =>
                        result.studentId === studentId
                );


            const resultData = {

                name: student.name,

                studentId: student.id,

                class: student.class,

                math,

                english,

                science,

                percentage,

                grade

            };


            if (existingIndex >= 0) {

                results[existingIndex] =
                    resultData;

            } else {

                results.unshift(
                    resultData
                );

            }


            saveResults();

            renderResults();

            closeResultModal();

            form.reset();

            showToast(
                `Result saved for ${student.name}`
            );

        }
    );

}


/* =========================================================
   NOTICE FORM
========================================================= */

function setupNoticeForm() {

    const form =
        document.getElementById("noticeForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const title =
                document.getElementById(
                    "noticeTitle"
                ).value.trim();


            const category =
                document.getElementById(
                    "noticeCategory"
                ).value;


            const message =
                document.getElementById(
                    "noticeMessage"
                ).value.trim();


            if (!title || !message) {

                showToast(
                    "Please complete the notice"
                );

                return;

            }


            notices.unshift({

                id: Date.now(),

                title,

                category,

                message,

                date: formatDate(
                    new Date()
                )

            });


            saveNotices();

            renderNotices();

            closeNoticeModal();

            form.reset();

            showToast(
                "Notice published successfully"
            );

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

function filterStudents() {

    const search =
        document.getElementById(
            "studentSearch"
        )?.value
            .toLowerCase()
            .trim() || "";


    const classFilter =
        document.getElementById(
            "classFilter"
        )?.value || "";


    const filtered =
        students.filter(student => {

            const matchesSearch = (

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


            const matchesClass =
                !classFilter ||
                student.class === classFilter;


            return (
                matchesSearch &&
                matchesClass
            );

        });


    renderStudents(filtered);

}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

function setupGlobalSearch() {

    const search =
        document.getElementById(
            "globalSearch"
        );

    if (!search) return;


    search.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Enter") return;


            const value =
                search.value.trim();


            if (!value) return;


            setPage("students");


            const studentSearch =
                document.getElementById(
                    "studentSearch"
                );


            studentSearch.value =
                value;


            filterStudents();

        }
    );

}


/* =========================================================
   EXPORT STUDENTS
========================================================= */

function exportStudents() {

    if (!students.length) {

        showToast(
            "No students to export"
        );

        return;

    }


    const headers = [
        "Name",
        "Student ID",
        "Class",
        "Phone",
        "Fee",
        "Status"
    ];


    const rows =
        students.map(student => [

            student.name,
            student.id,
            student.class,
            student.phone,
            student.fee,
            student.status

        ]);


    const csv = [

        headers,

        ...rows

    ]
        .map(row =>
            row
                .map(value =>
                    `"${String(value).replace(/"/g, '""')}"`
                )
                .join(",")
        )
        .join("\n");


    const blob =
        new Blob(
            [csv],
            {
                type: "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "edumanage-students.csv";


    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);


    showToast(
        "Students exported successfully"
    );

}


/* =========================================================
   CONTACT DEVELOPER
========================================================= */

function contactDeveloper() {

    showToast(
        "Developer contact request noted"
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


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2600);

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById("mobileMenu");

    const sidebar =
        document.getElementById("sidebar");


    if (!button || !sidebar) return;


    button.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "open"
            );

        }
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

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

}


/* =========================================================
   MODAL OUTSIDE CLICK
========================================================= */

function setupModalClicks() {

    document
        .querySelectorAll(".modal")
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        modal.classList.remove(
                            "show"
                        );

                    }

                }
            );

        });

}


/* =========================================================
   DATE
========================================================= */

function getToday() {

    const date =
        new Date();


    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            date.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;

}


function formatDate(date) {

    return date.toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   DASHBOARD DATE
========================================================= */

function setupDashboardDate() {

    const element =
        document.getElementById(
            "dashboardDate"
        );

    if (!element) return;


    element.textContent =
        formatDate(new Date());

}


/* =========================================================
   DATE CHANGE
========================================================= */

function setupAttendanceFilters() {

    document
        .getElementById("attendanceClass")
        ?.addEventListener(
            "change",
            renderAttendance
        );


    document
        .getElementById("attendanceDate")
        ?.addEventListener(
            "change",
            renderAttendance
        );

}


/* =========================================================
   LIVE SETTINGS PREVIEW
========================================================= */

function setupSettingsPreview() {

    [
        "academyName",
        "academyPhone",
        "academyEmail",
        "academyAddress"

    ].forEach(id => {

        document
            .getElementById(id)
            ?.addEventListener(
                "input",
                updateAcademyPreview
            );

    });

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* Default date */

        const attendanceDate =
            document.getElementById(
                "attendanceDate"
            );


        if (attendanceDate) {

            attendanceDate.value =
                getToday();

        }


        /* Navigation */

        setupNavigation();


        /* Mobile */

        setupMobileMenu();


        /* Modals */

        setupModalClicks();


        /* Forms */

        setupStudentForm();

        setupTeacherForm();

        setupPaymentForm();

        setupResultForm();

        setupNoticeForm();


        /* Search */

        document
            .getElementById("studentSearch")
            ?.addEventListener(
                "input",
                filterStudents
            );


        document
            .getElementById("classFilter")
            ?.addEventListener(
                "change",
                filterStudents
            );


        setupGlobalSearch();


        /* Attendance */

        setupAttendanceFilters();


        /* Settings */

        setupSettingsPreview();


        /* Dashboard */

        setupDashboardDate();


        /* Render */

        renderStudents();

        renderTeachers();

        renderAttendance();

        renderFees();

        renderResults();

        renderNotices();


        /* Settings */

        loadSettings();


        /* Dashboard */

        updateDashboardStats();

    }
);