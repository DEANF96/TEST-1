<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>הדאנג'ן – מסיבות פטיש עם הופעות סאדו</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
</head>
<body>

  <!-- ===== NAV ===== -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <div class="nav-logo">
        <a href="#">
          <span class="logo-text">THE DUNGEON</span>
          <span class="logo-heb">הדאנג'ן</span>
        </a>
      </div>
      <button class="burger" id="burger" aria-label="תפריט">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#">הדאנג'ן</a></li>
        <li><a href="#events">אירועים</a></li>
        <li><a href="#rules">נהלי המועדון</a></li>
        <li><a href="#gallery">גלריות</a></li>
        <li><a href="#shop">חנות</a></li>
        <li><a href="#guides">מדריכים</a></li>
        <li><a href="#contact">צור קשר</a></li>
        <li><a href="#tickets" class="nav-cta">כרטיסים</a></li>
      </ul>
    </div>
  </nav>

  <!-- ===== HERO ===== -->
  <header class="hero" id="home">
    <div class="hero-bg">
      <div class="hero-particles" id="particles"></div>
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <p class="hero-eyebrow">ברוכים הבאים</p>
      <h1 class="hero-title">
        <span class="line1">הדאנג'ן</span>
        <span class="line2">THE DUNGEON</span>
      </h1>
      <p class="hero-subtitle">מועדון הפטיש והבדס"מ הראשון והמוביל בישראל</p>
      <div class="hero-btns">
        <a href="#events" class="btn btn-primary">לרכישת כרטיסים</a>
        <a href="#about" class="btn btn-ghost">קצת עלינו</a>
      </div>
    </div>
    <div class="hero-scroll">
      <span>גלול למטה</span>
      <div class="scroll-arrow"></div>
    </div>
  </header>

  <!-- ===== ABOUT ===== -->
  <section class="about" id="about">
    <div class="section-label">// על המועדון</div>
    <div class="container about-grid">
      <div class="about-intro">
        <h2>החוויה<br/><em>במועדון</em></h2>
        <div class="red-line"></div>
        <p>המועדון, כמועדון הפטיש והבדס"מ הראשון בישראל והמוביל בתחומו בארץ ובעולם, מספק חוויה אולטימטיבית ומעניק כרטיס כניסה לעולם של הנאה חושית וגופנית משכרת.</p>
        <p>המועדון פועל ויוצר את אירועיו על פי קוד הבדס"מי העולמי – SSC (שפוי, בטוח ובהסכמה). בשל אופיו הייחודי, המועדון שומר על איזון מגדרי ואינו מאפשר כניסה ליחידים.</p>
      </div>

      <div class="about-cards">
        <div class="about-card" data-delay="0">
          <div class="card-icon">🎭</div>
          <h3>בילוי איכותי וייחודי</h3>
          <p>כבר שנים רבות המועדון מספק תחושה של 'בית' המאפשרת לכם ליהנות מפתיחות ולחקור את המיניות שלכם באווירה סקסית, מאפשרת והרפתקנית.</p>
        </div>
        <div class="about-card" data-delay="100">
          <div class="card-icon">👔</div>
          <h3>דרס קוד</h3>
          <p>הכניסה למסיבות מחייבת עמידה בקוד לבוש הכולל ביגוד קינקי ופטישיסטי, עם דרישת מינימום של לבוש מכובד בצבע שחור.</p>
        </div>
        <div class="about-card" data-delay="200">
          <div class="card-icon">🛡️</div>
          <h3>מרחב מוגן</h3>
          <p>מרחב בטוח לבליינים הוא העיקרון המנחה. אנחנו מכשירים ומעסיקים צוות גדול של מאבטחים שמטרתו לשמור על המרחב של כל המבלות והמבלים.</p>
        </div>
        <div class="about-card" data-delay="300">
          <div class="card-icon">🎨</div>
          <h3>אמנות</h3>
          <p>אנחנו מאמינים בביטוי אמנותי ומקדמים אומנים – ציירים, צלמים, פסלים, פרפורמרים ואמנים נוספים מכל תחום מופיעים במועדון.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== EVENTS ===== -->
  <section class="events" id="events">
    <div class="section-label">// אירועים קרובים</div>
    <div class="container">
      <h2 class="section-title">האירועים <em>הקרובים</em></h2>
      <div class="red-line centered"></div>
      <div class="events-grid">

        <article class="event-card">
          <div class="event-date-badge">
            <span class="day">15</span>
            <span class="month">מאי</span>
          </div>
          <div class="event-body">
            <span class="event-tag">מסיבת פטיש</span>
            <h3>DARK DESIRES</h3>
            <p>ערב מיוחד עם הופעות BDSM חיות, מוזיקה אלקטרונית ואווירה שאין כמוה בישראל.</p>
            <div class="event-meta">
              <span>🕙 22:00 – 04:00</span>
              <span>📍 תל אביב</span>
            </div>
            <a href="#" class="btn btn-primary btn-sm">לרכישת כרטיסים</a>
          </div>
        </article>

        <article class="event-card featured">
          <div class="event-date-badge">
            <span class="day">22</span>
            <span class="month">מאי</span>
          </div>
          <div class="event-body">
            <span class="event-tag">אירוע מיוחד</span>
            <h3>MASQUERADE NIGHT</h3>
            <p>מסיבת מסכות – ערב של מסתורין, תשוקה וחופש. הגיעו במסכות ובלבוש קינקי.</p>
            <div class="event-meta">
              <span>🕙 22:00 – 05:00</span>
              <span>📍 תל אביב</span>
            </div>
            <a href="#" class="btn btn-primary btn-sm">לרכישת כרטיסים</a>
          </div>
        </article>

        <article class="event-card">
          <div class="event-date-badge">
            <span class="day">29</span>
            <span class="month">מאי</span>
          </div>
          <div class="event-body">
            <span class="event-tag">מסיבת פטיש</span>
            <h3>CHAINS & FREEDOM</h3>
            <p>החוויה הגדולה ביותר של החודש – הופעות מרהיבות, DJ סט בינלאומי ותפאורה ייחודית.</p>
            <div class="event-meta">
              <span>🕙 22:00 – 04:00</span>
              <span>📍 תל אביב</span>
            </div>
            <a href="#" class="btn btn-primary btn-sm">לרכישת כרטיסים</a>
          </div>
        </article>

      </div>
      <div class="events-cta">
        <a href="#" class="btn btn-ghost">לכל האירועים</a>
      </div>
    </div>
  </section>

  <!-- ===== VIDEO ===== -->
  <section class="video-section">
    <div class="video-overlay-text">
      <p>לחצו פליי.</p>
      <h2>התמכרו לחוויה</h2>
    </div>
    <div class="video-grid">
      <div class="video-item" onclick="playVideo(this, 'https://dungeon.co.il/wp-content/uploads/2023/11/רילס-מאקבה.mp4')">
        <div class="video-thumb">
          <div class="play-btn">▶</div>
          <div class="video-shimmer"></div>
        </div>
        <span>חוויה 01</span>
      </div>
      <div class="video-item" onclick="playVideo(this, 'https://dungeon.co.il/wp-content/uploads/2023/11/מסיבה-דאנגן-כייף.mp4')">
        <div class="video-thumb">
          <div class="play-btn">▶</div>
          <div class="video-shimmer"></div>
        </div>
        <span>חוויה 02</span>
      </div>
      <div class="video-item" onclick="playVideo(this, 'https://dungeon.co.il/wp-content/uploads/2023/11/בואו-תרגישו.mp4')">
        <div class="video-thumb">
          <div class="play-btn">▶</div>
          <div class="video-shimmer"></div>
        </div>
        <span>חוויה 03</span>
      </div>
    </div>
  </section>

  <!-- ===== GALLERY ===== -->
  <section class="gallery" id="gallery">
    <div class="section-label">// גלריות</div>
    <div class="container">
      <h2 class="section-title">הצצה ל<em>עולם שלנו</em></h2>
      <div class="red-line centered"></div>
      <div class="gallery-grid">
        <div class="gallery-item tall" style="background: linear-gradient(135deg, #1a0a0a 0%, #3d0000 100%)">
          <div class="gallery-overlay"><span>אירוע DARK DESIRE</span></div>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #0d0d1a 0%, #1a003d 100%)">
          <div class="gallery-overlay"><span>תפאורה</span></div>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #1a0a00 0%, #3d1500 100%)">
          <div class="gallery-overlay"><span>הופעות</span></div>
        </div>
        <div class="gallery-item wide" style="background: linear-gradient(135deg, #0a1a0a 0%, #003d00 100%)">
          <div class="gallery-overlay"><span>אמנות ופרפורמנס</span></div>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #1a001a 0%, #3d003d 100%)">
          <div class="gallery-overlay"><span>לילה במועדון</span></div>
        </div>
      </div>
      <div class="events-cta">
        <a href="#" class="btn btn-ghost">לכל הגלריות</a>
      </div>
    </div>
  </section>

  <!-- ===== RULES ===== -->
  <section class="rules" id="rules">
    <div class="rules-bg"></div>
    <div class="container rules-inner">
      <div class="section-label">// נהלי המועדון</div>
      <h2 class="section-title">נהלי <em>המועדון</em></h2>
      <div class="red-line centered"></div>
      <div class="rules-grid">
        <div class="rule-item">
          <span class="rule-num">01</span>
          <h4>איזון מגדרי</h4>
          <p>המועדון שומר על איזון מגדרי ואינו מאפשר כניסה ליחידים. נדרש להגיע עם בן/בת זוג או כקבוצה מאוזנת.</p>
        </div>
        <div class="rule-item">
          <span class="rule-num">02</span>
          <h4>קוד לבוש</h4>
          <p>ביגוד קינקי ופטישיסטי מומלץ. מינימום – לבוש אלגנטי בצבע שחור. אין כניסה בבגדי יום-יום.</p>
        </div>
        <div class="rule-item">
          <span class="rule-num">03</span>
          <h4>כבוד הדדי</h4>
          <p>SSC – שפוי, בטוח ובהסכמה. פעולה כלשהי ללא הסכמה מפורשת תגרור הרחקה מיידית מהמועדון.</p>
        </div>
        <div class="rule-item">
          <span class="rule-num">04</span>
          <h4>פרטיות</h4>
          <p>צילום ללא רשות אסור בהחלט. כל מה שקורה במועדון נשאר במועדון. מדיניות פרטיות קפדנית.</p>
        </div>
        <div class="rule-item">
          <span class="rule-num">05</span>
          <h4>גיל</h4>
          <p>כניסה מגיל 21 בלבד. יש להציג תעודה מזהה בכניסה ללא יוצא מן הכלל.</p>
        </div>
        <div class="rule-item">
          <span class="rule-num">06</span>
          <h4>כרטיס חבר</h4>
          <p>כרטיס חבר מועדון מיועד ללקוחות מוכרים וקבועים. ניתן לרכישה בקופת המועדון באישור מנהלים.</p>
        </div>
      </div>
      <div class="events-cta">
        <a href="#" class="btn btn-primary">לנהלי המועדון המלאים</a>
      </div>
    </div>
  </section>

  <!-- ===== TESTIMONIALS ===== -->
  <section class="testimonials">
    <div class="container">
      <div class="section-label">// חוויות אורחים</div>
      <h2 class="section-title">החוויה <em>האישית שלי</em></h2>
      <div class="red-line centered"></div>
      <div class="testimonials-track" id="testimonialsTrack">
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>"הייתי פעם ראשונה בדאנג'ן ונדהמתי כמה שונה המציאות מהסטיגמה. תחושת ביטחון, אנשים יפים ואווירה מדהימה."</p>
          <div class="testimonial-author">
            <div class="author-avatar">A</div>
            <span>אורח מועדון</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>"הגעתי פעם ראשונה עם אישתי, רצינו להבין על מה כולם מדברים. החוויה הייתה כל כך טובה שהתחלנו להגיע כל שבוע עם זוג חברים נוסף."</p>
          <div class="testimonial-author">
            <div class="author-avatar">M</div>
            <span>זוג קבוע</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>"האמת שלא ידענו למה לצפות וקיבלנו את אחד הערבים הכי כיפים. אנשים יפים, סאונד ומוזיקה מעולה. מה שקורה שם נשאר שם."</p>
          <div class="testimonial-author">
            <div class="author-avatar">R</div>
            <span>מבקר קבוע</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== NEWSLETTER ===== -->
  <section class="newsletter" id="newsletter">
    <div class="newsletter-bg"></div>
    <div class="container newsletter-inner">
      <h2>הרשמו לעדכונים<br/><em>על אירועים חדשים</em></h2>
      <p>קבלו עדכונים ראשונים על מסיבות, אירועים מיוחדים וכרטיסים מוזלים</p>
      <form class="newsletter-form" onsubmit="handleSubscribe(event)">
        <input type="email" placeholder="כתובת האימייל שלכם" required />
        <button type="submit" class="btn btn-primary">הרשמה</button>
      </form>
      <label class="checkbox-label">
        <input type="checkbox" required />
        <span>אני מאשר/ת את מדיניות הפרטיות ומסכים/ה לקבל עדכונים על האירועים הקרובים בדאנג'ן</span>
      </label>
    </div>
  </section>

  <!-- ===== CONTACT ===== -->
  <section class="contact" id="contact">
    <div class="container contact-grid">
      <div class="contact-info">
        <div class="section-label">// צור קשר</div>
        <h2>דברו <em>איתנו</em></h2>
        <div class="red-line"></div>
        <p>יש לכם שאלות? אנחנו כאן בשבילכם. ניתן ליצור קשר בכל נושא הקשור למועדון, כרטיסים, שיתופי פעולה ועוד.</p>
        <div class="contact-links">
          <a href="mailto:info@dungeon.co.il" class="contact-link">
            <span class="link-icon">✉</span> info@dungeon.co.il
          </a>
          <a href="#" class="contact-link">
            <span class="link-icon">📸</span> אינסטגרם
          </a>
          <a href="#" class="contact-link">
            <span class="link-icon">👥</span> פייסבוק
          </a>
        </div>
      </div>
      <form class="contact-form" onsubmit="handleContact(event)">
        <input type="text" placeholder="שם מלא" required />
        <input type="email" placeholder="אימייל" required />
        <input type="tel" placeholder="טלפון (לא חובה)" />
        <textarea placeholder="הודעה..." rows="5" required></textarea>
        <button type="submit" class="btn btn-primary">שלח הודעה</button>
      </form>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-logo">
        <span class="logo-text">THE DUNGEON</span>
        <span class="logo-heb">הדאנג'ן</span>
      </div>
      <nav class="footer-nav">
        <a href="#">הדאנג'ן</a>
        <a href="#events">אירועים</a>
        <a href="#rules">נהלי המועדון</a>
        <a href="#gallery">גלריות</a>
        <a href="#">חנות</a>
        <a href="#">מדריכים</a>
        <a href="#contact">צור קשר</a>
      </nav>
      <p class="footer-copy">© 2025 הדאנג'ן – כל הזכויות שמורות | +18 בלבד</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
