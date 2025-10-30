# GitHub Deployment Instructions

## Step 1: Create New GitHub Repository

1. Go to https://github.com
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - Repository name: `my-app` (or your preferred name)
   - Description: "Minimal full-stack app with ASP.NET Core backend and React frontend"
   - Make it Public or Private as needed
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Add Files to Git (Manual Commands)

Since git commands are restricted, run these commands in your terminal:

```bash
# Add all files to git
git add .

# Commit the changes
git commit -m "Initial commit: Minimal full-stack app with ASP.NET Core backend and React frontend"

# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/my-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: Replace `YOUR_USERNAME` with your actual GitHub username.

## Alternative: Use GitHub Desktop

1. Install GitHub Desktop if you don't have it
2. Open GitHub Desktop
3. Click "Add an Existing Repository from your Hard Drive"
4. Navigate to your project folder
5. Click "Publish repository" to push to GitHub

## What Gets Pushed:

- ✅ All source code for backend and frontend
- ✅ Configuration files (.csproj, package.json, etc.)
- ✅ README.md with setup instructions
- ✅ .gitignore files (properly excluding build artifacts)
- ✅ Dockerfile for Cloud Run deployment
- ❌ node_modules/ (excluded by .gitignore)
- ❌ bin/ and obj/ directories (excluded by .gitignore)

## After Successful Push:

Your repository will be available at: `https://github.com/YOUR_USERNAME/my-app`

The repo will contain:
- Complete monorepo structure
- Both backend and frontend projects
- Setup instructions in README.md
- Ready for cloning and development