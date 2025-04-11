// API service functions to get data from the backend

// Mock API service to simulate backend calls
export interface Au2024 {
  enrollment: BigInteger;
  name: string;
  year: number;
  division: string;
}

export interface Btech2022 {
  name: string;
  usn: string;
  contact: string;
  enrollment: BigInteger;
  division: string;
}

export interface Btech2023 {
  name: string;
  contact: string;
  enrollment: BigInteger;
  division: string;
}

export interface Btech2024 {
  name: string;
  sr: BigInteger;
  temp: string;
  program: string;
  division: string;
}

export type SearchParams = {
  enrollmentNumber?: string;
  name?: string;
}

// Function to fetch all Au2024 students
export const fetchAllAu2024 = async (): Promise<Au2024[]> => {
  const response = await fetch('https://adanidb-backend.onrender.com/api/all/au2024');
  if (!response.ok) {
    throw new Error('Failed to fetch Au2024 data');
  }
  return await response.json();
}

// Function to search Au2024 students by enrollment number
export const searchAu2024ByEnrollment = async (enrollment: number): Promise<Au2024[]> => {
  const response = await fetch(`https://adanidb-backend.onrender.com/api/search/au2024/enrollment?enrollment=${enrollment}`);
  if (!response.ok) {
    throw new Error('Failed to search Au2024 by enrollment');
  }
  return await response.json();
}

// Function to search Au2024 students by name
export const searchAu2024ByName = async (name: string): Promise<Au2024[]> => {
  const response = await fetch(`https://adanidb-backend.onrender.com/api/search/au2024/name?name=${name}`);
  if (!response.ok) {
    throw new Error('Failed to search Au2024 by name');
  }
  return await response.json();
}

// Function to search Btech2022 students by enrollment number
export const searchBtech2022ByEnrollment = async (enrollment: number): Promise<Btech2022[]> => {
  const response = await fetch(`https://adanidb-backend.onrender.com/api/search/btech2022/enrollment?enrollment=${enrollment}`);
  if (!response.ok) {
    throw new Error('Failed to search Btech2022 by enrollment');
  }
  return await response.json();
}

// Function to search Btech2023 students by enrollment number
export const searchBtech2023ByEnrollment = async (enrollment: number): Promise<Btech2023[]> => {
  const response = await fetch(`https://adanidb-backend.onrender.com/api/search/btech2023/enrollment?enrollment=${enrollment}`);
  if (!response.ok) {
    throw new Error('Failed to search Btech2023 by enrollment');
  }
  return await response.json();
}

// Function to search Btech2024 students by name
export const searchBtech2024ByName = async (name: string): Promise<Btech2024[]> => {
  const response = await fetch(`https://adanidb-backend.onrender.com/api/search/btech2024/name?name=${name}`);
  if (!response.ok) {
    throw new Error('Failed to search Btech2024 by name');
  }
  return await response.json();
}

// Function to search Btech2024 students by enrollment number
export const searchBtech2024ByEnrollment = async (enrollment: number): Promise<Btech2024[]> => {
  const response = await fetch(`https://adanidb-backend.onrender.com/api/search/btech2024/enrollment?enrollment=${enrollment}`);
  if (!response.ok) {
    throw new Error('Failed to search Btech2024 by enrollment');
  }
  return await response.json();
}
