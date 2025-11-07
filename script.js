// Data Structure
let data = {
  transactions: [],
  categories: {
    expense: [
      "Housing",
      "Food",
      "Transportation",
      "Entertainment",
      "Healthcare",
      "Shopping",
      "Utilities",
      "Others",
    ],
    income: ["Salary", "Freelance", "Investment", "Gift", "Others"],
  },
  accounts: [{ id: 1, name: "Cash", balance: 0 }],
  budgets: [],
};

// ============ DUMMY DATA - ADD THIS SECTION ============

function generateDummyDataDirectly() {
  // Check if data already exists
  const stored = localStorage.getItem("expenseTrackerData");
  if (stored) {
    return; // Don't override existing data
  }

  // Create multiple accounts with realistic balances
  data.accounts = [
    { id: 1, name: "Savings Account", balance: 0 },
    { id: 2, name: "Current Account", balance: 0 },
    { id: 3, name: "Credit Card", balance: 0 },
    { id: 4, name: "Cash Wallet", balance: 0 },
    { id: 5, name: "PayTM", balance: 0 },
  ];

  // Add custom categories
  data.categories.expense = [
    "Housing",
    "Food",
    "Transportation",
    "Entertainment",
    "Healthcare",
    "Shopping",
    "Utilities",
    "Education",
    "Groceries",
    "Dining Out",
    "Gym",
    "Insurance",
    "Others",
  ];

  data.categories.income = [
    "Salary",
    "Freelance",
    "Investment",
    "Bonus",
    "Gift",
    "Rental Income",
    "Business",
    "Others",
  ];

  // Set budgets for various categories
  data.budgets = [
    { category: "Food", amount: 15000 },
    { category: "Transportation", amount: 8000 },
    { category: "Entertainment", amount: 5000 },
    { category: "Shopping", amount: 10000 },
    { category: "Groceries", amount: 12000 },
    { category: "Dining Out", amount: 7000 },
    { category: "Utilities", amount: 5000 },
  ];

  // Generate transactions for the last 90 days
  const transactions = [];
  const today = new Date();
  let transactionId = 1000;

  // Income transactions (monthly salary and occasional income)
  for (let month = 0; month < 3; month++) {
    const salaryDate = new Date(today);
    salaryDate.setMonth(salaryDate.getMonth() - month);
    salaryDate.setDate(1);

    transactions.push({
      id: transactionId++,
      type: "income",
      description: "Monthly Salary",
      amount: 85000,
      category: "Salary",
      accountId: 2,
      date: salaryDate.toISOString().split("T")[0],
      notes: "Regular monthly salary payment",
      timestamp: salaryDate.toISOString(),
    });

    // Add freelance income occasionally
    if (month === 0) {
      const freelanceDate = new Date(salaryDate);
      freelanceDate.setDate(15);
      transactions.push({
        id: transactionId++,
        type: "income",
        description: "Website Development Project",
        amount: 35000,
        category: "Freelance",
        accountId: 2,
        date: freelanceDate.toISOString().split("T")[0],
        notes: "Client: ABC Corp",
        timestamp: freelanceDate.toISOString(),
      });
    }

    if (month === 1) {
      const bonusDate = new Date(salaryDate);
      bonusDate.setDate(20);
      transactions.push({
        id: transactionId++,
        type: "income",
        description: "Performance Bonus",
        amount: 25000,
        category: "Bonus",
        accountId: 2,
        date: bonusDate.toISOString().split("T")[0],
        notes: "Q2 Performance bonus",
        timestamp: bonusDate.toISOString(),
      });
    }
  }

  // Define expense patterns
  const expensePatterns = [
    // Housing (monthly)
    {
      description: "House Rent",
      amount: 25000,
      category: "Housing",
      frequency: "monthly",
      day: 5,
      accountId: 2,
    },
    {
      description: "Electricity Bill",
      amount: 2500,
      category: "Utilities",
      frequency: "monthly",
      day: 10,
      accountId: 1,
    },
    {
      description: "Water Bill",
      amount: 800,
      category: "Utilities",
      frequency: "monthly",
      day: 10,
      accountId: 1,
    },
    {
      description: "Internet Bill",
      amount: 1200,
      category: "Utilities",
      frequency: "monthly",
      day: 15,
      accountId: 2,
    },
    {
      description: "Mobile Recharge",
      amount: 599,
      category: "Utilities",
      frequency: "monthly",
      day: 1,
      accountId: 5,
    },

    // Insurance
    {
      description: "Health Insurance Premium",
      amount: 3500,
      category: "Insurance",
      frequency: "monthly",
      day: 7,
      accountId: 2,
    },

    // Gym
    {
      description: "Gym Membership",
      amount: 2000,
      category: "Gym",
      frequency: "monthly",
      day: 1,
      accountId: 2,
    },

    // Groceries (weekly)
    {
      description: "Weekly Groceries - Big Bazaar",
      amount: 2800,
      category: "Groceries",
      frequency: "weekly",
      accountId: 1,
    },
    {
      description: "Vegetables & Fruits",
      amount: 800,
      category: "Groceries",
      frequency: "weekly",
      accountId: 4,
    },

    // Transportation (frequent)
    {
      description: "Petrol",
      amount: 3000,
      category: "Transportation",
      frequency: "biweekly",
      accountId: 1,
    },
    {
      description: "Uber Ride",
      amount: 250,
      category: "Transportation",
      frequency: "random",
      accountId: 5,
    },
    {
      description: "Metro Card Recharge",
      amount: 1000,
      category: "Transportation",
      frequency: "monthly",
      day: 3,
      accountId: 4,
    },

    // Dining Out (frequent)
    {
      description: "Restaurant - Dinner",
      amount: 1200,
      category: "Dining Out",
      frequency: "random",
      accountId: 3,
    },
    {
      description: "Zomato Order",
      amount: 450,
      category: "Dining Out",
      frequency: "random",
      accountId: 5,
    },
    {
      description: "Coffee Shop",
      amount: 300,
      category: "Dining Out",
      frequency: "random",
      accountId: 4,
    },
    {
      description: "Pizza Delivery",
      amount: 800,
      category: "Dining Out",
      frequency: "random",
      accountId: 3,
    },

    // Entertainment (random)
    {
      description: "Movie Tickets",
      amount: 600,
      category: "Entertainment",
      frequency: "random",
      accountId: 3,
    },
    {
      description: "Netflix Subscription",
      amount: 799,
      category: "Entertainment",
      frequency: "monthly",
      day: 12,
      accountId: 2,
    },
    {
      description: "Amazon Prime",
      amount: 299,
      category: "Entertainment",
      frequency: "monthly",
      day: 20,
      accountId: 2,
    },
    {
      description: "Spotify Premium",
      amount: 119,
      category: "Entertainment",
      frequency: "monthly",
      day: 8,
      accountId: 5,
    },

    // Shopping (random)
    {
      description: "Clothing - Mall",
      amount: 3500,
      category: "Shopping",
      frequency: "random",
      accountId: 3,
    },
    {
      description: "Amazon Shopping",
      amount: 2200,
      category: "Shopping",
      frequency: "random",
      accountId: 3,
    },
    {
      description: "Flipkart Order",
      amount: 1800,
      category: "Shopping",
      frequency: "random",
      accountId: 3,
    },
    {
      description: "Electronics Purchase",
      amount: 8500,
      category: "Shopping",
      frequency: "rare",
      accountId: 3,
    },

    // Healthcare
    {
      description: "Doctor Consultation",
      amount: 800,
      category: "Healthcare",
      frequency: "rare",
      accountId: 1,
    },
    {
      description: "Medicines",
      amount: 1200,
      category: "Healthcare",
      frequency: "random",
      accountId: 4,
    },
    {
      description: "Medical Tests",
      amount: 2500,
      category: "Healthcare",
      frequency: "rare",
      accountId: 2,
    },

    // Food (home cooking)
    {
      description: "Milk & Dairy",
      amount: 600,
      category: "Food",
      frequency: "weekly",
      accountId: 4,
    },
    {
      description: "Bakery Items",
      amount: 300,
      category: "Food",
      frequency: "random",
      accountId: 4,
    },

    // Education
    {
      description: "Online Course - Udemy",
      amount: 999,
      category: "Education",
      frequency: "rare",
      accountId: 3,
    },
    {
      description: "Books Purchase",
      amount: 1500,
      category: "Education",
      frequency: "rare",
      accountId: 3,
    },

    // Others
    {
      description: "Haircut",
      amount: 350,
      category: "Others",
      frequency: "monthly",
      day: 25,
      accountId: 4,
    },
    {
      description: "Car Maintenance",
      amount: 4500,
      category: "Others",
      frequency: "rare",
      accountId: 2,
    },
    {
      description: "Gift for Friend",
      amount: 2500,
      category: "Others",
      frequency: "rare",
      accountId: 3,
    },
  ];

  // Generate transactions for last 90 days
  for (let daysAgo = 90; daysAgo >= 0; daysAgo--) {
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    const dateStr = date.toISOString().split("T")[0];
    const dayOfMonth = date.getDate();
    const dayOfWeek = date.getDay();

    expensePatterns.forEach((pattern) => {
      let shouldAdd = false;

      if (pattern.frequency === "monthly" && dayOfMonth === pattern.day) {
        shouldAdd = true;
      } else if (pattern.frequency === "weekly" && dayOfWeek === 6) {
        // Saturday
        shouldAdd = true;
      } else if (
        pattern.frequency === "biweekly" &&
        dayOfWeek === 3 &&
        Math.floor(daysAgo / 14) % 2 === 0
      ) {
        shouldAdd = true;
      } else if (pattern.frequency === "random" && Math.random() > 0.85) {
        shouldAdd = true;
      } else if (pattern.frequency === "rare" && Math.random() > 0.97) {
        shouldAdd = true;
      }

      if (shouldAdd) {
        const variance = 0.85 + Math.random() * 0.3; // ±15% variance
        const amount = Math.round(pattern.amount * variance);

        transactions.push({
          id: transactionId++,
          type: "expense",
          description: pattern.description,
          amount: amount,
          category: pattern.category,
          accountId: pattern.accountId,
          date: dateStr,
          notes: "",
          timestamp: date.toISOString(),
        });
      }
    });
  }

  // Sort transactions by date (newest first)
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  data.transactions = transactions;

  // Calculate account balances based on transactions
  data.accounts.forEach((account) => {
    account.balance = 0;
  });

  transactions.forEach((t) => {
    const account = data.accounts.find((a) => a.id === t.accountId);
    if (account) {
      if (t.type === "income") {
        account.balance += t.amount;
      } else {
        account.balance -= t.amount;
      }
    }
  });

  // Save to localStorage
  saveData();
  console.log("✅ Dummy data generated successfully!");
  console.log(`📊 Generated ${transactions.length} transactions`);
  console.log(`💳 Created ${data.accounts.length} accounts`);
  console.log(`🏷️ Set up ${data.budgets.length} budgets`);
}

// ============ END DUMMY DATA SECTION ============

// Load data
// Load data
function loadData() {
  const stored = localStorage.getItem("expenseTrackerData");
  if (stored) {
    data = JSON.parse(stored);
  } else {
    // If no stored data exists, generate dummy data
    generateDummyDataDirectly();
  }
}

// Save data
function saveData() {
  localStorage.setItem("expenseTrackerData", JSON.stringify(data));
}

// Initialize
function init() {
  loadData();
  document.getElementById("trans-date").valueAsDate = new Date();
  updateAllSelects();
  updateDashboard();
  updateTransactionsList();
  updateAnalytics();
  updateCategoriesList();
  updateAccountsList();
  updateBudgetList();
}

// Switch tabs
function switchTab(tabName) {
  document
    .querySelectorAll(".tab-content")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".nav-tab")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");

  if (tabName === "analytics") updateAnalytics();
  if (tabName === "dashboard") updateDashboard();
}

// Update all dropdowns
function updateAllSelects() {
  const type = document.getElementById("trans-type").value;
  const categorySelect = document.getElementById("trans-category");
  categorySelect.innerHTML = data.categories[type]
    .map((cat) => `<option value="${cat}">${cat}</option>`)
    .join("");

  const accountSelect = document.getElementById("trans-account");
  accountSelect.innerHTML = data.accounts
    .map((acc) => `<option value="${acc.id}">${acc.name}</option>`)
    .join("");

  // Update filters
  document.getElementById("filter-category").innerHTML =
    '<option value="all">All Categories</option>' +
    [...data.categories.expense, ...data.categories.income]
      .map((cat) => `<option value="${cat}">${cat}</option>`)
      .join("");

  document.getElementById("filter-account").innerHTML =
    '<option value="all">All Accounts</option>' +
    data.accounts
      .map((acc) => `<option value="${acc.id}">${acc.name}</option>`)
      .join("");

  // Update budget modal
  const budgetCatSelect = document.getElementById("modal-budget-category");
  if (budgetCatSelect) {
    budgetCatSelect.innerHTML = data.categories.expense
      .map((cat) => `<option value="${cat}">${cat}</option>`)
      .join("");
  }
}

function updateFormByType() {
  updateAllSelects();
}

// Add transaction
function addTransaction() {
  const type = document.getElementById("trans-type").value;
  const description = document.getElementById("trans-description").value.trim();
  const amount = parseFloat(document.getElementById("trans-amount").value);
  const category = document.getElementById("trans-category").value;
  const accountId = parseInt(document.getElementById("trans-account").value);
  const date = document.getElementById("trans-date").value;
  const notes = document.getElementById("trans-notes").value.trim();

  if (!description || !amount || amount <= 0) {
    alert("Please fill in all required fields with valid values");
    return;
  }

  const transaction = {
    id: Date.now(),
    type,
    description,
    amount,
    category,
    accountId,
    date,
    notes,
    timestamp: new Date().toISOString(),
  };

  data.transactions.unshift(transaction);

  // Update account balance
  const account = data.accounts.find((a) => a.id === accountId);
  if (account) {
    account.balance += type === "income" ? amount : -amount;
  }

  saveData();
  clearTransactionForm();
  updateDashboard();
  updateTransactionsList();
  updateAccountsList();
  alert("Transaction added successfully!");
}

function clearTransactionForm() {
  document.getElementById("trans-description").value = "";
  document.getElementById("trans-amount").value = "";
  document.getElementById("trans-notes").value = "";
  document.getElementById("trans-date").valueAsDate = new Date();
}

// Delete transaction
function deleteTransaction(id) {
  if (!confirm("Are you sure you want to delete this transaction?")) return;

  const trans = data.transactions.find((t) => t.id === id);
  if (trans) {
    const account = data.accounts.find((a) => a.id === trans.accountId);
    if (account) {
      account.balance -= trans.type === "income" ? trans.amount : -trans.amount;
    }
  }

  data.transactions = data.transactions.filter((t) => t.id !== id);
  saveData();
  updateDashboard();
  updateTransactionsList();
  updateAccountsList();
}

// Filter transactions
function filterTransactions() {
  updateTransactionsList();
}

// Update transactions list
function updateTransactionsList() {
  const tbody = document.getElementById("all-transactions");
  const typeFilter = document.getElementById("filter-type").value;
  const categoryFilter = document.getElementById("filter-category").value;
  const accountFilter = document.getElementById("filter-account").value;
  const searchTerm = document
    .getElementById("search-trans")
    .value.toLowerCase();

  let filtered = data.transactions.filter((t) => {
    if (typeFilter !== "all" && t.type !== typeFilter) return false;
    if (categoryFilter !== "all" && t.category !== categoryFilter) return false;
    if (accountFilter !== "all" && t.accountId !== parseInt(accountFilter))
      return false;
    if (searchTerm && !t.description.toLowerCase().includes(searchTerm))
      return false;
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="7" style="text-align:center;padding:40px;color:#999;">No transactions found</td></tr>';
    return;
  }

  tbody.innerHTML = filtered
    .map((t) => {
      const account = data.accounts.find((a) => a.id === t.accountId);
      return `
                    <tr>
                        <td>${new Date(t.date).toLocaleDateString()}</td>
                        <td><strong>${t.description}</strong>${
        t.notes ? '<br><small style="color:#999;">' + t.notes + "</small>" : ""
      }</td>
                        <td>${t.category}</td>
                        <td>${account ? account.name : "Unknown"}</td>
                        <td><span class="badge badge-${t.type}">${
        t.type
      }</span></td>
                        <td class="amount-${
                          t.type === "income" ? "positive" : "negative"
                        }">
                            ${
                              t.type === "income" ? "+" : "-"
                            }₹${t.amount.toFixed(2)}
                        </td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="deleteTransaction(${
                              t.id
                            })">Delete</button>
                        </td>
                    </tr>
                `;
    })
    .join("");
}

// Update dashboard
function updateDashboard() {
  const income = data.transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = data.transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expenses;

  document.getElementById("dash-income").textContent = income.toFixed(2);
  document.getElementById("dash-expenses").textContent = expenses.toFixed(2);
  document.getElementById("dash-balance").textContent = balance.toFixed(2);
  document.getElementById("dash-count").textContent = data.transactions.length;

  // Recent transactions
  const recentTbody = document.getElementById("recent-transactions");
  const recent = data.transactions.slice(0, 5);

  if (recent.length === 0) {
    recentTbody.innerHTML =
      '<tr><td colspan="5" style="text-align:center;padding:40px;color:#999;">No transactions yet</td></tr>';
  } else {
    recentTbody.innerHTML = recent
      .map((t) => {
        const account = data.accounts.find((a) => a.id === t.accountId);
        return `
                        <tr>
                            <td>${new Date(t.date).toLocaleDateString()}</td>
                            <td>${t.description}</td>
                            <td>${t.category}</td>
                            <td>${account ? account.name : "Unknown"}</td>
                            <td class="amount-${
                              t.type === "income" ? "positive" : "negative"
                            }">
                                ${
                                  t.type === "income" ? "+" : "-"
                                }₹${t.amount.toFixed(2)}
                            </td>
                        </tr>
                    `;
      })
      .join("");
  }

  updateWeeklyChart();
}

// Weekly chart
let weeklyChartInstance = null;
function updateWeeklyChart() {
  const ctx = document.getElementById("weeklyChart");
  if (!ctx) return;

  const last7Days = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    last7Days.push(date.toISOString().split("T")[0]);
  }

  const dailyData = last7Days.map((date) => {
    const dayTransactions = data.transactions.filter(
      (t) => t.date === date && t.type === "expense"
    );
    return dayTransactions.reduce((sum, t) => sum + t.amount, 0);
  });

  const labels = last7Days.map((date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  });

  if (weeklyChartInstance) weeklyChartInstance.destroy();

  weeklyChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Daily Spending",
          data: dailyData,
          backgroundColor: "rgba(239, 68, 68, 0.8)",
          borderColor: "rgba(239, 68, 68, 1)",
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => "₹" + value,
          },
        },
      },
    },
  });
}

// Analytics
let pieChartInstance = null;
let trendChartInstance = null;
let topCategoriesChartInstance = null;

function updateAnalytics() {
  const period = parseInt(document.getElementById("analytics-period").value);
  const cutoffDate = new Date();
  if (period !== "all") {
    cutoffDate.setDate(cutoffDate.getDate() - period);
  }

  const filtered = data.transactions.filter((t) => {
    if (period === "all") return true;
    return new Date(t.date) >= cutoffDate;
  });

  const income = filtered
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = filtered
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const savings = income - expenses;
  const avgDaily =
    expenses / (period === "all" ? Math.max(1, filtered.length) : period);

  document.getElementById("analytics-income").textContent = income.toFixed(2);
  document.getElementById("analytics-expenses").textContent =
    expenses.toFixed(2);
  document.getElementById("analytics-savings").textContent = savings.toFixed(2);
  document.getElementById("analytics-avg").textContent = avgDaily.toFixed(2);

  updateCategoryPieChart(filtered);
  updateTrendChart(filtered, period);
  updateTopCategoriesChart(filtered);
}

function updateCategoryPieChart(transactions) {
  const ctx = document.getElementById("categoryPieChart");
  if (!ctx) return;

  const expenseTransactions = transactions.filter((t) => t.type === "expense");
  const categoryTotals = {};

  expenseTransactions.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const labels = Object.keys(categoryTotals);
  const values = Object.values(categoryTotals);

  if (pieChartInstance) pieChartInstance.destroy();

  if (labels.length === 0) {
    ctx.getContext("2d").clearRect(0, 0, ctx.width, ctx.height);
    return;
  }

  pieChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "#ef4444",
            "#f59e0b",
            "#10b981",
            "#3b82f6",
            "#8b5cf6",
            "#ec4899",
            "#14b8a6",
            "#f97316",
          ],
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.label + ": ₹" + context.parsed.toFixed(2);
            },
          },
        },
      },
    },
  });
}

function updateTrendChart(transactions, period) {
  const ctx = document.getElementById("trendChart");
  if (!ctx) return;

  let days = period === "all" ? 30 : Math.min(period, 30);
  const dateLabels = [];
  const incomeData = [];
  const expenseData = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    dateLabels.push(
      date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    );

    const dayIncome = transactions
      .filter((t) => t.date === dateStr && t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const dayExpense = transactions
      .filter((t) => t.date === dateStr && t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    incomeData.push(dayIncome);
    expenseData.push(dayExpense);
  }

  if (trendChartInstance) trendChartInstance.destroy();

  trendChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: dateLabels,
      datasets: [
        {
          label: "Income",
          data: incomeData,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Expenses",
          data: expenseData,
          borderColor: "#ef4444",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => "₹" + value,
          },
        },
      },
    },
  });
}

function updateTopCategoriesChart(transactions) {
  const ctx = document.getElementById("topCategoriesChart");
  if (!ctx) return;

  const expenseTransactions = transactions.filter((t) => t.type === "expense");
  const categoryTotals = {};

  expenseTransactions.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const sorted = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const labels = sorted.map((item) => item[0]);
  const values = sorted.map((item) => item[1]);

  if (topCategoriesChartInstance) topCategoriesChartInstance.destroy();

  if (labels.length === 0) {
    ctx.getContext("2d").clearRect(0, 0, ctx.width, ctx.height);
    return;
  }

  topCategoriesChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Spending by Category",
          data: values,
          backgroundColor: [
            "#ef4444",
            "#f59e0b",
            "#10b981",
            "#3b82f6",
            "#8b5cf6",
          ],
          borderRadius: 8,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: (value) => "₹" + value,
          },
        },
      },
    },
  });
}

// Categories Management
function updateCategoriesList() {
  const expenseDiv = document.getElementById("expense-categories");
  const incomeDiv = document.getElementById("income-categories");

  expenseDiv.innerHTML = data.categories.expense
    .map(
      (cat) => `
                <div class="category-item">
                    <span>${cat}</span>
                    <button class="btn btn-danger btn-sm" onclick="deleteCategory('expense', '${cat}')">Delete</button>
                </div>
            `
    )
    .join("");

  incomeDiv.innerHTML = data.categories.income
    .map(
      (cat) => `
                <div class="category-item">
                    <span>${cat}</span>
                    <button class="btn btn-danger btn-sm" onclick="deleteCategory('income', '${cat}')">Delete</button>
                </div>
            `
    )
    .join("");
}

function openCategoryModal() {
  document.getElementById("categoryModal").classList.add("active");
}

function closeCategoryModal() {
  document.getElementById("categoryModal").classList.remove("active");
  document.getElementById("modal-category-name").value = "";
}

function saveCategory() {
  const name = document.getElementById("modal-category-name").value.trim();
  const type = document.getElementById("modal-category-type").value;

  if (!name) {
    alert("Please enter a category name");
    return;
  }

  if (data.categories[type].includes(name)) {
    alert("Category already exists");
    return;
  }

  data.categories[type].push(name);
  saveData();
  updateCategoriesList();
  updateAllSelects();
  closeCategoryModal();
  alert("Category added successfully!");
}

function deleteCategory(type, name) {
  const inUse = data.transactions.some((t) => t.category === name);
  if (inUse) {
    alert("Cannot delete category that is in use by transactions");
    return;
  }

  if (!confirm(`Delete category "${name}"?`)) return;

  data.categories[type] = data.categories[type].filter((c) => c !== name);
  saveData();
  updateCategoriesList();
  updateAllSelects();
}

// Accounts Management
function updateAccountsList() {
  const div = document.getElementById("accounts-list");

  if (data.accounts.length === 0) {
    div.innerHTML =
      '<div class="empty-state">No accounts yet. Add your first account!</div>';
    return;
  }

  div.innerHTML = data.accounts
    .map(
      (acc) => `
                <div class="account-card">
                    <h4>${acc.name}</h4>
                    <div style="font-size: 28px; font-weight: 700; margin: 10px 0;">
                        ₹${acc.balance.toFixed(2)}
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="deleteAccount(${
                      acc.id
                    })">Delete Account</button>
                </div>
            `
    )
    .join("");
}

function openAccountModal() {
  document.getElementById("accountModal").classList.add("active");
}

function closeAccountModal() {
  document.getElementById("accountModal").classList.remove("active");
  document.getElementById("modal-account-name").value = "";
  document.getElementById("modal-account-balance").value = "";
}

function saveAccount() {
  const name = document.getElementById("modal-account-name").value.trim();
  const balance =
    parseFloat(document.getElementById("modal-account-balance").value) || 0;

  if (!name) {
    alert("Please enter an account name");
    return;
  }

  const account = {
    id: Date.now(),
    name,
    balance,
  };

  data.accounts.push(account);
  saveData();
  updateAccountsList();
  updateAllSelects();
  closeAccountModal();
  alert("Account added successfully!");
}

function deleteAccount(id) {
  const inUse = data.transactions.some((t) => t.accountId === id);
  if (inUse) {
    alert("Cannot delete account that has transactions");
    return;
  }

  if (!confirm("Delete this account?")) return;

  data.accounts = data.accounts.filter((a) => a.id !== id);
  saveData();
  updateAccountsList();
  updateAllSelects();
}

// Budget Management
function updateBudgetList() {
  const div = document.getElementById("budget-list");

  if (data.budgets.length === 0) {
    div.innerHTML =
      '<div class="empty-state">No budgets set. Create your first budget to track spending!</div>';
    return;
  }

  const currentMonth = new Date().toISOString().slice(0, 7);

  div.innerHTML = data.budgets
    .map((budget) => {
      const spent = data.transactions
        .filter(
          (t) =>
            t.type === "expense" &&
            t.category === budget.category &&
            t.date.startsWith(currentMonth)
        )
        .reduce((sum, t) => sum + t.amount, 0);

      const percentage = (spent / budget.amount) * 100;
      const status =
        percentage > 100 ? "danger" : percentage > 80 ? "warning" : "success";

      return `
                    <div class="chart-container">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <div>
                                <h4 style="margin: 0;">${budget.category}</h4>
                                <p style="margin: 5px 0; color: #666;">
                                    ₹${spent.toFixed(
                                      2
                                    )} of ₹${budget.amount.toFixed(2)}
                                </p>
                            </div>
                            <button class="btn btn-danger btn-sm" onclick="deleteBudget('${
                              budget.category
                            }')">Delete</button>
                        </div>
                        <div style="background: #e5e7eb; height: 30px; border-radius: 15px; overflow: hidden;">
                            <div style="background: var(--${status}); height: 100%; width: ${Math.min(
        percentage,
        100
      )}%; transition: width 0.3s;"></div>
                        </div>
                        <p style="margin-top: 10px; text-align: center; font-weight: 600; color: var(--${status});">
                            ${percentage.toFixed(1)}% Used
                        </p>
                    </div>
                `;
    })
    .join("");
}

function openBudgetModal() {
  document.getElementById("budgetModal").classList.add("active");
}

function closeBudgetModal() {
  document.getElementById("budgetModal").classList.remove("active");
  document.getElementById("modal-budget-amount").value = "";
}

function saveBudget() {
  const category = document.getElementById("modal-budget-category").value;
  const amount = parseFloat(
    document.getElementById("modal-budget-amount").value
  );

  if (!amount || amount <= 0) {
    alert("Please enter a valid budget amount");
    return;
  }

  const existing = data.budgets.findIndex((b) => b.category === category);
  if (existing !== -1) {
    if (!confirm("Budget already exists for this category. Update it?")) return;
    data.budgets[existing].amount = amount;
  } else {
    data.budgets.push({ category, amount });
  }

  saveData();
  updateBudgetList();
  closeBudgetModal();
  alert("Budget saved successfully!");
}

function deleteBudget(category) {
  if (!confirm(`Delete budget for ${category}?`)) return;

  data.budgets = data.budgets.filter((b) => b.category !== category);
  saveData();
  updateBudgetList();
}

// Initialize app
init();
