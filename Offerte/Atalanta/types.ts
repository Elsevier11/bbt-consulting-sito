
// Fix: Import React to provide the 'React' namespace for React.ReactNode
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface ApplicationArea {
  id: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Phase {
  title: string;
  description: string;
  steps: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
