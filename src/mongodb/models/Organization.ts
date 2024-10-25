import mongoose from 'mongoose';
import { OrganizationModel, User } from './types';

const OrganizationSchema = new mongoose.Schema<OrganizationModel>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    members: [
      {
        type: [
          {
            id: {
              type: String,
              required: true,
            },
            email: {
              type: String,
              required: false,
            },
            given_name: {
              type: String,
              required: false,
            },
            family_name: {
              type: String,
              required: false,
            },
            picture: {
              type: String,
              required: false,
            },
          },
        ],
      },
    ],
    owner: {
      type: {
        id: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: false,
        },
        given_name: {
          type: String,
          required: false,
        },
        family_name: {
          type: String,
          required: false,
        },
        picture: {
          type: String,
          required: false,
        },
      },
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<OrganizationModel>(
  'Organization',
  OrganizationSchema
);
