// sanity.config.js
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './schemas/schema';
import { visionTool } from '@sanity/vision';
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget
} from '@sanity/dashboard';
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel';
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list';

export default defineConfig({
  title: 'voce-moderna',
  projectId: 'a31t0q44',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        projectUsersWidget(),
        documentListWidget({
          title: 'Last Edited',
          order: '_updatedAt desc',
          limit: 8,
          layout: { width: 'medium' }
        }),
        vercelWidget()
      ]
    })
  ],
  schema: {
    types: schemas
  }
});
