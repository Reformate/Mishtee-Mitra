"use client";

import React, { useState, useEffect } from 'react';

/**
 * mishTee Delivery Mitra - Mobile Dashboard
 * Single-file Next.js App Router Component
 */

export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Animation logic for the "Online" status dot
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Professional-grade Inline Style Objects
  const styles = {
    wrapper: {
      backgroundColor: '#eef2f5',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    container: {
      maxWidth: '500px',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#fdfdfd',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '40px',
      textAlign: 'center',
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '12px',
    },
    title: {
      fontSize: '26px',
      fontWeight: '800',
      color: '#FF8C00', // mishTee Orange
      margin: '0 0 12px 0',
      letterSpacing: '-0.5px',
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ecfdf5',
      padding: '8px 16px',
      borderRadius: '30px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#059669',
      border: '1px solid #d1fae5',
    },
    pulseDot: {
      height: '10px',
      width: '10px',
      backgroundColor: '#10b981',
      borderRadius: '50%',
      marginRight: '10px',
      opacity: isPulsing ? 1 : 0.3,
      transition: 'opacity 0.4s ease-in-out',
      boxShadow: isPulsing ? '0 0 8px #10b981' : 'none',
    },
    taskCard: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      marginBottom: '30px',
      border: '1px solid #f1f5f9',
    },
    cardHeader: {
      fontSize: '13px',
      color: '#94a3b8',
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '1px',
      marginBottom: '8px',
    },
    customerName: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '12px',
    },
    address: {
      fontSize: '15px',
      color: '#64748b',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#FF8C00',
      color: '#ffffff',
      border: 'none',
      borderRadius: '16px',
      padding: '20px',
      fontSize: '18px',
      fontWeight: '700',
      cursor: 'pointer',
      width: '100%',
      marginTop: 'auto',
      boxShadow: '0 10px 15px -3px rgba(255, 140, 0, 0.3)',
      transition: 'all 0.2s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Logo and Title Section */}
        <header style={styles.header}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo" 
            style={styles.logo}
          />
          <h1 style={styles.title}>mishTee Delivery Mitra</h1>
          <div style={styles.statusBadge}>
            <span style={styles.pulseDot}></span>
            Agent Online
          </div>
        </header>

        {/* Task Card Section */}
        <main>
          <div style={styles.taskCard}>
            <div style={styles.cardHeader}>Deliver to:</div>
            <div style={styles.customerName}>Arjun Mehta</div>
            <div style={styles.address}>
              <span style={{ marginRight: '8px' }}>📍</span>
              Sector 45, Gurgaon, Haryana 122003
            </div>
          </div>
        </main>

        {/* Navigation Action */}
        <button 
          style={styles.button}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => window.open('https://maps.google.com', '_blank')}
        >
          <span>🚀</span> Start Navigation
        </button>
      </div>
    </div>
  );
}
