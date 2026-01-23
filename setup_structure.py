import os
from pathlib import Path

def create_structure():
    # Base directory for the Next.js app
    base_src = Path("src")
    app_dir = base_src / "app"
    comp_dir = base_src / "components"
    lib_dir = base_src / "lib"
    styles_dir = base_src / "styles"
    
    # List of directories to create
    directories = [
        app_dir / "about",
        app_dir / "programme",
        app_dir / "families",
        app_dir / "resources",
        app_dir / "resources/[slug]",
        app_dir / "contact",
        app_dir / "eligibility",
        comp_dir / "layout",
        comp_dir / "ui",
        comp_dir / "sections",
        lib_dir,
        styles_dir,
    ]

    # Create all directories first
    print("🚀 Creating directory structure...")
    for directory in directories:
        directory.mkdir(parents=True, exist_ok=True)

    # Empty files to create (so you can paste code into them)
    files = [
        # Layout & Global
        comp_dir / "layout/Navbar.tsx",
        comp_dir / "layout/Footer.tsx",
        styles_dir / "animations.css",
        lib_dir / "constants.ts",
        
        # UI Components
        comp_dir / "ui/Button.tsx",
        comp_dir / "ui/Card.tsx",
        
        # Section Components (for Home Page)
        comp_dir / "sections/Hero.tsx",
        comp_dir / "sections/ValuePillars.tsx",
        comp_dir / "sections/LatestResources.tsx",
        
        # Main Pages
        app_dir / "page.tsx", # Home Page
        app_dir / "about/page.tsx",
        app_dir / "programme/page.tsx",
        app_dir / "families/page.tsx",
        app_dir / "resources/page.tsx",
        app_dir / "resources/[slug]/page.tsx",
        app_dir / "contact/page.tsx",
        app_dir / "eligibility/page.tsx",
    ]

    print("📄 Creating files...")
    for file_path in files:
        if not file_path.exists():
            with open(file_path, "w") as f:
                f.write("// Paste code here\n")
            print(f"✅ Created: {file_path}")
        else:
            print(f"⚠️ Already exists: {file_path}")

    print("\n✨ All folders and files are ready! Ab aap sirf code copy-paste kar sakte hain.")

if __name__ == "__main__":
    create_structure()
