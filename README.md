# VIP-Network / VIP.TV Website

VIP-Network ও VIP.TV-এর জন্য একটি responsive static website starter project। GitHub Pages-এ প্রকাশ করার জন্য তৈরি।

## কী আছে
- Premium dark theme: navy, blue ও cyan neon
- VIP-Network hero banner
- ভিডিও প্লেয়ার mockup
- ভিডিও প্লেয়ারের ঠিক নিচে নোটিশ বার
- নোটিশের পর ক্যাটাগরি মেনু (ব্যানারের উপরে কোনো ক্যাটাগরি নেই)
- চ্যানেল কার্ড, ক্যাটাগরি ফিল্টার ও সার্চ
- মোবাইল/ট্যাবলেট/ডেস্কটপ responsive layout
- WhatsApp support link

## GitHub Pages-এ প্রকাশ
1. ZIP ফাইলটি Extract করুন।
2. GitHub-এ নতুন repository তৈরি করুন।
3. `index.html`, `style.css`, `script.js` এবং `README.md` repository-এর root-এ upload করুন।
4. Repository-এর **Settings → Pages** খুলুন।
5. **Deploy from a branch** নির্বাচন করে `main` এবং `/(root)` নির্বাচন করুন, তারপর Save করুন।
6. প্রকাশিত URL কয়েক মিনিটের মধ্যে Pages অংশে দেখাবে।

## গুরুত্বপূর্ণ
- এটি একটি frontend demo/mockup। ভিডিও প্লেয়ার এখন বাস্তব IPTV stream চালায় না।
- বাস্তব চ্যানেল চালাতে বৈধ stream URL এবং উপযুক্ত player integration যোগ করতে হবে।
- চ্যানেল নাম ও ক্যাটাগরি `script.js` ফাইলে সম্পাদনা করা যাবে।
- WhatsApp নম্বর `index.html`-এ রাখা হয়েছে; প্রয়োজন হলে বদলে নিন।
- Google Fonts লোড করতে ইন্টারনেট সংযোগ দরকার; সংযোগ না থাকলেও fallback font ব্যবহৃত হবে।
