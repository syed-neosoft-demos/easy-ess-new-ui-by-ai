"use client";
import { useState } from "react";
import {
  Calendar,
  DollarSign,
  Clock,
  User,
  FileText,
  Settings,
  Bell,
  LogOut,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Plus,
  Eye,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: User },
    { id: "attendance", label: "Attendance", icon: Clock },
    { id: "leave", label: "Leave Management", icon: Calendar },
    { id: "salary", label: "Salary & Payroll", icon: DollarSign },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const leaveData = {
    totalLeaves: 24,
    usedLeaves: 9,
    remainingLeaves: 15,
    pendingRequests: 2,
    recentApplications: [
      {
        id: 1,
        type: "Annual Leave",
        dates: "Dec 23-27, 2024",
        days: 5,
        status: "approved",
        appliedOn: "2024-12-01",
      },
      {
        id: 2,
        type: "Sick Leave",
        dates: "Dec 15, 2024",
        days: 1,
        status: "pending",
        appliedOn: "2024-12-14",
      },
      {
        id: 3,
        type: "Personal Leave",
        dates: "Nov 28, 2024",
        days: 1,
        status: "approved",
        appliedOn: "2024-11-20",
      },
      {
        id: 4,
        type: "Annual Leave",
        dates: "Oct 10-12, 2024",
        days: 3,
        status: "approved",
        appliedOn: "2024-09-25",
      },
    ],
  };

  const attendanceData = {
    thisMonth: {
      present: 18,
      absent: 2,
      late: 3,
      workingDays: 23,
    },
    recentActivity: [
      {
        date: "2024-12-16",
        checkIn: "09:15 AM",
        checkOut: "06:30 PM",
        hours: "9h 15m",
        status: "present",
      },
      {
        date: "2024-12-15",
        checkIn: "09:45 AM",
        checkOut: "06:45 PM",
        hours: "9h 00m",
        status: "late",
      },
      {
        date: "2024-12-14",
        checkIn: "09:00 AM",
        checkOut: "06:15 PM",
        hours: "9h 15m",
        status: "present",
      },
      {
        date: "2024-12-13",
        checkIn: "09:30 AM",
        checkOut: "06:30 PM",
        hours: "9h 00m",
        status: "present",
      },
      {
        date: "2024-12-12",
        checkIn: "-",
        checkOut: "-",
        hours: "-",
        status: "absent",
      },
    ],
  };

  const salaryData = {
    currentSalary: 75000,
    lastPayment: {
      month: "November 2024",
      grossPay: 6250,
      deductions: 1250,
      netPay: 5000,
      payDate: "2024-11-30",
    },
    ytdEarnings: 55000,
    payslips: [
      { month: "November 2024", gross: 6250, net: 5000, status: "paid" },
      { month: "October 2024", gross: 6250, net: 5000, status: "paid" },
      { month: "September 2024", gross: 6250, net: 5000, status: "paid" },
      { month: "August 2024", gross: 6250, net: 5000, status: "paid" },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "rejected":
        return "text-red-600 bg-red-100";
      case "present":
        return "text-green-600 bg-green-100";
      case "late":
        return "text-yellow-600 bg-yellow-100";
      case "absent":
        return "text-red-600 bg-red-100";
      case "paid":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <AlertCircle className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Leave Balance</p>
              <p className="font-bold text-gray-900 text-2xl">
                {leaveData.remainingLeaves}
              </p>
              <p className="text-gray-500 text-xs">
                of {leaveData.totalLeaves} days
              </p>
            </div>
            <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">This Month</p>
              <p className="font-bold text-gray-900 text-2xl">
                {attendanceData.thisMonth.present}
              </p>
              <p className="text-gray-500 text-xs">days present</p>
            </div>
            <div className="flex justify-center items-center bg-green-100 rounded-full w-12 h-12">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Last Payment</p>
              <p className="font-bold text-gray-900 text-2xl">
                ${salaryData.lastPayment.netPay.toLocaleString()}
              </p>
              <p className="text-gray-500 text-xs">
                {salaryData.lastPayment.month}
              </p>
            </div>
            <div className="flex justify-center items-center bg-teal-100 rounded-full w-12 h-12">
              <DollarSign className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Pending Requests</p>
              <p className="font-bold text-gray-900 text-2xl">
                {leaveData.pendingRequests}
              </p>
              <p className="text-gray-500 text-xs">awaiting approval</p>
            </div>
            <div className="flex justify-center items-center bg-yellow-100 rounded-full w-12 h-12">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <h3 className="mb-4 font-semibold text-gray-900 text-lg">
            Recent Leave Applications
          </h3>
          <div className="space-y-3">
            {leaveData.recentApplications.slice(0, 3).map((leave) => (
              <div
                key={leave.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{leave.type}</p>
                  <p className="text-gray-600 text-sm">{leave.dates}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      leave.status
                    )}`}
                  >
                    {leave.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <h3 className="mb-4 font-semibold text-gray-900 text-lg">
            Recent Attendance
          </h3>
          <div className="space-y-3">
            {attendanceData.recentActivity.slice(0, 3).map((day, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{day.date}</p>
                  <p className="text-gray-600 text-sm">
                    {day.checkIn} - {day.checkOut}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    day.status
                  )}`}
                >
                  {day.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderLeave = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-gray-900 text-2xl">Leave Management</h2>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
          <Plus className="mr-2 w-4 h-4" />
          Apply Leave
        </button>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-16 h-16">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {leaveData.totalLeaves}
            </p>
            <p className="text-gray-600 text-sm">Total Allocated</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-red-100 mx-auto mb-4 rounded-full w-16 h-16">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {leaveData.usedLeaves}
            </p>
            <p className="text-gray-600 text-sm">Used</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-green-100 mx-auto mb-4 rounded-full w-16 h-16">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {leaveData.remainingLeaves}
            </p>
            <p className="text-gray-600 text-sm">Remaining</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-yellow-100 mx-auto mb-4 rounded-full w-16 h-16">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {leaveData.pendingRequests}
            </p>
            <p className="text-gray-600 text-sm">Pending</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-xl">
        <div className="p-6 border-gray-100 border-b">
          <h3 className="font-semibold text-gray-900 text-lg">
            Leave Applications
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Days
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Applied On
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaveData.recentApplications.map((leave) => (
                <tr key={leave.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">
                    {leave.type}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    {leave.dates}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    {leave.days}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    {leave.appliedOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          leave.status
                        )}`}
                      >
                        {getStatusIcon(leave.status)}
                        <span className="ml-1 capitalize">{leave.status}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-6">
      <h2 className="font-bold text-gray-900 text-2xl">Attendance Tracking</h2>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-green-100 mx-auto mb-4 rounded-full w-16 h-16">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {attendanceData.thisMonth.present}
            </p>
            <p className="text-gray-600 text-sm">Present Days</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-red-100 mx-auto mb-4 rounded-full w-16 h-16">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {attendanceData.thisMonth.absent}
            </p>
            <p className="text-gray-600 text-sm">Absent Days</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-yellow-100 mx-auto mb-4 rounded-full w-16 h-16">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {attendanceData.thisMonth.late}
            </p>
            <p className="text-gray-600 text-sm">Late Arrivals</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-16 h-16">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              {Math.round(
                (attendanceData.thisMonth.present /
                  attendanceData.thisMonth.workingDays) *
                  100
              )}
              %
            </p>
            <p className="text-gray-600 text-sm">Attendance Rate</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-xl">
        <div className="p-6 border-gray-100 border-b">
          <h3 className="font-semibold text-gray-900 text-lg">
            Recent Attendance
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Check Out
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Hours
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.recentActivity.map((day, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">
                    {day.date}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    {day.checkIn}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    {day.checkOut}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    {day.hours}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        day.status
                      )}`}
                    >
                      {day.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSalary = () => (
    <div className="space-y-6">
      <h2 className="font-bold text-gray-900 text-2xl">Salary & Payroll</h2>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-16 h-16">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              ${salaryData.currentSalary.toLocaleString()}
            </p>
            <p className="text-gray-600 text-sm">Annual Salary</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-green-100 mx-auto mb-4 rounded-full w-16 h-16">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              ${salaryData.ytdEarnings.toLocaleString()}
            </p>
            <p className="text-gray-600 text-sm">YTD Earnings</p>
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-teal-100 mx-auto mb-4 rounded-full w-16 h-16">
              <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>
            <p className="font-bold text-gray-900 text-2xl">
              ${salaryData.lastPayment.netPay.toLocaleString()}
            </p>
            <p className="text-gray-600 text-sm">Last Net Pay</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
        <h3 className="mb-4 font-semibold text-gray-900 text-lg">
          Latest Payslip Details
        </h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="mb-3 font-medium text-gray-900">Earnings</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Basic Salary</span>
                <span className="font-medium">
                  ${(salaryData.lastPayment.grossPay * 0.8).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Allowances</span>
                <span className="font-medium">
                  ${(salaryData.lastPayment.grossPay * 0.2).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t font-semibold">
                <span>Gross Pay</span>
                <span>${salaryData.lastPayment.grossPay.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-medium text-gray-900">Deductions</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Income Tax</span>
                <span className="font-medium">
                  ${(salaryData.lastPayment.deductions * 0.6).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Social Security</span>
                <span className="font-medium">
                  ${(salaryData.lastPayment.deductions * 0.3).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Health Insurance</span>
                <span className="font-medium">
                  ${(salaryData.lastPayment.deductions * 0.1).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t font-semibold">
                <span>Total Deductions</span>
                <span>
                  ${salaryData.lastPayment.deductions.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900 text-lg">Net Pay</span>
            <span className="font-bold text-green-600 text-2xl">
              ${salaryData.lastPayment.netPay.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-xl">
        <div className="p-6 border-gray-100 border-b">
          <h3 className="font-semibold text-gray-900 text-lg">
            Payslip History
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Month
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Gross Pay
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Net Pay
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salaryData.payslips.map((payslip, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">
                    {payslip.month}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    ${payslip.gross.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">
                    ${payslip.net.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        payslip.status
                      )}`}
                    >
                      {payslip.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <Download className="mr-1 w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "leave":
        return renderLeave();
      case "attendance":
        return renderAttendance();
      case "salary":
        return renderSalary();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="bg-white shadow-lg w-64">
        <div className="p-6 border-gray-200 border-b">
          <div className="flex items-center">
            <div className="flex justify-center items-center bg-blue-600 rounded-full w-10 h-10">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900 text-sm">John Doe</p>
              <p className="text-gray-500 text-xs">Software Engineer</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                <IconComponent className="mr-3 w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
                {activeTab === item.id && (
                  <ChevronRight className="ml-auto w-4 h-4" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="bottom-0 absolute p-6 border-gray-200 border-t w-64">
          <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
            <LogOut className="mr-3 w-5 h-5" />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 border-gray-200 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-gray-900 text-2xl">
                Employee Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, John! Here your overview.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex justify-center items-center bg-blue-600 rounded-full w-8 h-8">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  );
}
