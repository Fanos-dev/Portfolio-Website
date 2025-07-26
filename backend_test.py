#!/usr/bin/env python3
"""
Backend API Testing Script
Tests all FastAPI endpoints for the portfolio application
"""

import requests
import json
import sys
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ REACT_APP_BACKEND_URL not found in environment")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔍 Testing Backend API at: {API_BASE_URL}")
print("=" * 60)

def test_basic_api():
    """Test the basic GET /api/ endpoint"""
    print("\n📋 Testing Basic API Endpoint...")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Basic API endpoint working correctly")
                return True
            else:
                print("❌ Unexpected response message")
                return False
        else:
            print(f"❌ Basic API endpoint failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

def test_post_status():
    """Test POST /api/status endpoint"""
    print("\n📋 Testing POST Status Endpoint...")
    try:
        test_data = {
            "client_name": "test_client_portfolio"
        }
        
        response = requests.post(
            f"{API_BASE_URL}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("client_name") == "test_client_portfolio" and 
                "id" in data and 
                "timestamp" in data):
                print("✅ POST Status endpoint working correctly")
                return True, data.get("id")
            else:
                print("❌ Response missing required fields")
                return False, None
        else:
            print(f"❌ POST Status endpoint failed with status {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return False, None
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False, None

def test_get_status():
    """Test GET /api/status endpoint"""
    print("\n📋 Testing GET Status Endpoint...")
    try:
        response = requests.get(f"{API_BASE_URL}/status", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of status checks retrieved: {len(data)}")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check if the data has the expected structure
                    first_item = data[0]
                    if ("id" in first_item and 
                        "client_name" in first_item and 
                        "timestamp" in first_item):
                        print("✅ GET Status endpoint working correctly")
                        return True
                    else:
                        print("❌ Status check items missing required fields")
                        return False
                else:
                    print("✅ GET Status endpoint working (empty list)")
                    return True
            else:
                print("❌ Response is not a list")
                return False
        else:
            print(f"❌ GET Status endpoint failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

def test_mongodb_connection():
    """Test MongoDB connection by creating and retrieving data"""
    print("\n📋 Testing MongoDB Connection...")
    
    # First create a status check
    post_success, created_id = test_post_status()
    if not post_success:
        print("❌ MongoDB connection test failed - could not create data")
        return False
    
    # Then retrieve all status checks
    get_success = test_get_status()
    if not get_success:
        print("❌ MongoDB connection test failed - could not retrieve data")
        return False
    
    print("✅ MongoDB connection working correctly")
    return True

def test_no_contact_endpoints():
    """Verify that no backend contact form endpoints exist"""
    print("\n📋 Testing for Backend Contact Form Endpoints (should not exist)...")
    
    # Only test backend API endpoints, not frontend routes
    backend_contact_endpoints = [
        "/api/contact", 
        "/api/send-message",
        "/api/message",
        "/api/contact-form",
        "/api/submit-contact"
    ]
    
    all_good = True
    for endpoint in backend_contact_endpoints:
        try:
            full_url = f"{BACKEND_URL}{endpoint}"
            response = requests.get(full_url, timeout=5)
            
            if response.status_code != 404:
                print(f"⚠️  Found unexpected backend endpoint: {endpoint} (Status: {response.status_code})")
                all_good = False
            else:
                print(f"✅ Confirmed backend endpoint {endpoint} does not exist (404)")
                
        except requests.exceptions.RequestException:
            # This is expected - endpoints should not exist
            print(f"✅ Confirmed backend endpoint {endpoint} does not exist (connection error)")
    
    # Also test POST requests to ensure no contact submission endpoints
    for endpoint in ["/api/contact", "/api/send-message"]:
        try:
            full_url = f"{BACKEND_URL}{endpoint}"
            response = requests.post(full_url, json={"test": "data"}, timeout=5)
            
            if response.status_code not in [404, 405]:  # 404 = not found, 405 = method not allowed
                print(f"⚠️  Found unexpected POST endpoint: {endpoint} (Status: {response.status_code})")
                all_good = False
            else:
                print(f"✅ Confirmed POST {endpoint} does not exist ({response.status_code})")
                
        except requests.exceptions.RequestException:
            print(f"✅ Confirmed POST {endpoint} does not exist (connection error)")
    
    if all_good:
        print("✅ No backend contact form endpoints found (as expected)")
        return True
    else:
        print("❌ Found unexpected backend contact form endpoints")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base URL: {API_BASE_URL}")
    
    results = {}
    
    # Test 1: Basic API functionality
    results['basic_api'] = test_basic_api()
    
    # Test 2: POST status endpoint
    results['post_status'] = test_post_status()[0]
    
    # Test 3: GET status endpoint  
    results['get_status'] = test_get_status()
    
    # Test 4: MongoDB connection (combines POST and GET)
    results['mongodb_connection'] = test_mongodb_connection()
    
    # Test 5: No contact endpoints
    results['no_contact_endpoints'] = test_no_contact_endpoints()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed!")
        return True
    else:
        print("⚠️  Some backend tests failed")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)