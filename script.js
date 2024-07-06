function suggestSkill() {
    const previousSkill = document.getElementById('previousSkill').value.trim().toLowerCase();
    const hobby = document.getElementById('hobby').value.trim().toLowerCase();
    const passion = document.getElementById('passion').value.trim().toLowerCase();

    const suggestion = getSuggestion(previousSkill, hobby, passion);
    
    displaySuggestion(suggestion);
}

function getSuggestion(previousSkill, hobby, passion) {
    if (previousSkill === 'programming') {
        if (hobby === 'web development') {
            return 'You should learn JavaScript frameworks like React or Angular.';
        }
        if (passion === 'data science') {
            return 'You should learn Python libraries like Pandas and Scikit-Learn.';
        }
        if (hobby === 'game development') {
            return 'You should learn game development engines like Unity or Unreal Engine.';
        }
        if (passion === 'cybersecurity') {
            return 'You should learn ethical hacking and cybersecurity tools.';
        }
        if (hobby === 'mobile app development') {
            return 'You should learn frameworks like Flutter or React Native.';
        }
        if (passion === 'artificial intelligence') {
            return 'You should learn AI and machine learning frameworks like TensorFlow or PyTorch.';
        }
        if (hobby === 'blockchain') {
            return 'You should learn blockchain development and smart contract programming.';
        }
    }

    if (previousSkill === 'design') {
        if (hobby === 'photography') {
            return 'You should learn photo editing software like Adobe Photoshop.';
        }
        if (passion === 'illustration') {
            return 'You should learn digital illustration tools like Adobe Illustrator.';
        }
        if (hobby === 'interior design') {
            return 'You should learn interior design software like SketchUp or AutoCAD.';
        }
        if (passion === 'fashion design') {
            return 'You should learn fashion design tools like CLO 3D or Adobe Illustrator.';
        }
        if (hobby === 'animation') {
            return 'You should learn animation software like Adobe After Effects or Blender.';
        }
        if (passion === 'web design') {
            return 'You should learn UI/UX design and prototyping tools like Figma or Sketch.';
        }
        if (hobby === 'video editing') {
            return 'You should learn video editing software like Adobe Premiere Pro or Final Cut Pro.';
        }
    }

    if (previousSkill === 'writing') {
        if (hobby === 'blogging') {
            return 'You should learn content management systems like WordPress or Ghost.';
        }
        if (passion === 'fiction') {
            return 'You should learn creative writing techniques and storytelling.';
        }
        if (hobby === 'copywriting') {
            return 'You should learn SEO and digital marketing strategies.';
        }
        if (passion === 'technical writing') {
            return 'You should learn documentation tools and technical communication.';
        }
        if (hobby === 'journalism') {
            return 'You should learn investigative journalism techniques and media ethics.';
        }
        if (passion === 'screenwriting') {
            return 'You should learn screenplay format and scriptwriting tools like Final Draft.';
        }
        if (hobby === 'poetry') {
            return 'You should learn different forms of poetry and poetic devices.';
        }
    }

    if (previousSkill === 'marketing') {
        if (hobby === 'social media') {
            return 'You should learn social media management tools and strategies.';
        }
        if (passion === 'branding') {
            return 'You should learn brand management and identity design.';
        }
        if (hobby === 'advertising') {
            return 'You should learn advertising platforms like Google Ads and Facebook Ads.';
        }
        if (passion === 'market research') {
            return 'You should learn data analysis and market research methods.';
        }
        if (hobby === 'email marketing') {
            return 'You should learn email marketing tools like MailChimp or SendGrid.';
        }
        if (passion === 'content marketing') {
            return 'You should learn content creation and inbound marketing strategies.';
        }
        if (hobby === 'affiliate marketing') {
            return 'You should learn affiliate marketing strategies and platforms.';
        }
    }

    if (previousSkill === 'project management') {
        if (hobby === 'team management') {
            return 'You should learn agile methodologies and project management tools like Jira or Trello.';
        }
        if (passion === 'product development') {
            return 'You should learn product management frameworks and tools.';
        }
        if (hobby === 'event planning') {
            return 'You should learn event management and planning tools.';
        }
        if (passion === 'risk management') {
            return 'You should learn risk analysis and mitigation techniques.';
        }
        if (hobby === 'supply chain management') {
            return 'You should learn supply chain management and logistics.';
        }
    }

    if (previousSkill === 'data analysis') {
        if (hobby === 'statistics') {
            return 'You should learn advanced statistical methods and software like R or SAS.';
        }
        if (passion === 'big data') {
            return 'You should learn big data technologies like Hadoop or Spark.';
        }
        if (hobby === 'business intelligence') {
            return 'You should learn BI tools like Tableau or Power BI.';
        }
        if (passion === 'machine learning') {
            return 'You should learn machine learning algorithms and frameworks.';
        }
        if (hobby === 'data visualization') {
            return 'You should learn data visualization tools like D3.js or Plotly.';
        }
    }

    if (previousSkill === 'teaching') {
        if (hobby === 'language learning') {
            return 'You should learn advanced language teaching methods and tools.';
        }
        if (passion === 'curriculum development') {
            return 'You should learn instructional design and curriculum development.';
        }
        if (hobby === 'tutoring') {
            return 'You should learn personalized tutoring strategies and tools.';
        }
        if (passion === 'online education') {
            return 'You should learn e-learning platforms and online course creation.';
        }
        if (hobby === 'special education') {
            return 'You should learn special education teaching techniques and strategies.';
        }
    }

    return 'Explore online courses and resources related to your interests.';
}

function displaySuggestion(suggestion) {
    const suggestionDiv = document.getElementById('suggestion');
    suggestionDiv.innerHTML = `<p>${suggestion}</p>`;
    suggestionDiv.style.display = 'block';
}
