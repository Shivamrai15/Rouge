"use server";

import { db } from "@/lib/db";

export const getTotalReviews = async( productId : string ) => {
    try {
        
        const totalReviews = await db.comment.count({
            where : {
                productId
            }
        });

        return totalReviews;

    } catch (error) {
        return null;
    }
}

export const reviewsAggregation = async ( productId: string ) => {
    try {
        
        const avgRating = await db.comment.aggregate({
            where : {
                productId
            },
            _avg : {
                star : true
            }
        });

        const groupByRatings = await db.comment.groupBy({
            by : ["star"],
            where : {
                productId
            },
            _count : {
                star : true
            }
        });

        return { avgRating, groupByRatings };

    } catch (error) {
        null;
    }
}

export const getReviews =  async ( productId : string ) => {
    try {
        
        const reviews = await db.comment.findMany({
            where : {
                productId
            },
            orderBy : {
                createdAt : "desc"
            },
            take : 5
        });

        return reviews;

    } catch (error) {
        return [];
    }
}