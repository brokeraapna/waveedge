// strip-bar.js - Rupeezy Referral Strip Bar
(function() {
    // Don't add if already exists
    if (document.getElementById('rupeezy-strip')) return;
    
    // Create strip div
    const strip = document.createElement('div');
    strip.id = 'rupeezy-strip';
    strip.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap; justify-content: center;">
            <span style="font-size: 16px; font-weight: 600;">🚀 Open FREE Rupeezy Demat Account</span>
            <span style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 13px;">₹0 delivery brokerage</span>
            <span style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 13px;">⚡ 10-min setup</span>
            <span style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 13px;">✅ Recommended by WaveEdge</span>
            <a href="https://rupeezy.in/open-demat-account?referred_by=Hg2En&clicked=true" target="_blank" rel="noopener noreferrer" style="background: #ff9800; color: #1a1a1a; text-decoration: none; padding: 8px 24px; border-radius: 30px; font-weight: bold; font-size: 15px; transition: transform 0.2s; display: inline-block; box-shadow: 0 2px 5px rgba(0,0,0,0.2);" onmouseover="this.style.background='#ffb74d'; this.style.transform='scale(1.02)';" onmouseout="this.style.background='#ff9800'; this.style.transform='scale(1)';">Open FREE Account →</a>
        </div>
        <button onclick="this.parentElement.style.display='none'" style="background: transparent; border: 1px solid rgba(255,255,255,0.5); color: white; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-size: 16px; position: absolute; right: 10px; top: 50%; transform: translateY(-50%);">✕</button>
    `;
    
    // Apply styles
    strip.style.cssText = `
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        background: linear-gradient(135deg, #1a5f7a 0%, #0d3b4f 100%);
        color: white;
        padding: 12px 20px;
        font-family: system-ui, -apple-system, sans-serif;
        z-index: 999999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    `;
    
    // Add to page
    document.body.insertBefore(strip, document.body.firstChild);
    
    // Add body margin if not already added
    if (!document.getElementById('strip-body-style')) {
        const style = document.createElement('style');
        style.id = 'strip-body-style';
        style.textContent = 'body { margin-top: 70px !important; }';
        document.head.appendChild(style);
    }
    
    console.log('Rupeezy strip bar loaded');
})();
