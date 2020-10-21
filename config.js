const config = {
  token: "NzY2NTk2NTk1NjU5NDQwMTU5.X4lqtw.-k019XscmxyqlonCVkku6yO0sjE", //Botunuzun Tokeni
  sahip: "736208840202256464", //idniz

  dashboard: {
    oauthSecret: "766596595659440159", // Secrec Keyiniz
    callbackURL: "http://salami-kanki.glitch.me:8080/callback", //Dönüş Linki
    sessionSecret: "super-secret-session-thing", //Burayı Ellemiyoruz
    domain: "http://salami-kanki.glitch.me:8080/", //alanadınız domaininiz
    port: 8080 //glitch kullanıyorsanız ellemeyin vds ise 80 yapın // SSL için cloudflare kullanıcaz 443 yapmayın portu 80 kalsın (vds için)
  }
};

module.exports = config;
