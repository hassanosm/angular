import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Order {
  id: number;
  items: string[];
  total: number;
  date: string;
}

interface MonthlyReport {
  month: string;
  orderCount: number;
  totalRevenue: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl ='http://localhost:8090/api/resturants/orders'

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getMonthlyReport(): Observable<MonthlyReport[]> {
    return this.http.get<Order[]>(this.apiUrl).pipe(
      map(orders => {
        const report = new Map<string, { orderCount: number, totalRevenue: number }>();

        orders.forEach(order => {
          const month = new Date(order.date).toLocaleString('default', { month: 'long', year: 'numeric' });

          if (!report.has(month)) {
            report.set(month, { orderCount: 0, totalRevenue: 0 });
          }

          const monthData = report.get(month)!;
          monthData.orderCount++;
          monthData.totalRevenue += order.total;
        });

        return Array.from(report, ([month, data]) => ({
          month,
          orderCount: data.orderCount,
          totalRevenue: data.totalRevenue
        }));
      })
    );
  }
}
