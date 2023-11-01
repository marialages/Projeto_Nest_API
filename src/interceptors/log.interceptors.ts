import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common/interfaces";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/internal/operators/tap";


export class LogInterceptor implements NestInterceptor{

    intercept(context:ExecutionContext, next: CallHandler) : Observable<any>{

        const dt = Date.now();

        return next.handle().pipe(tap(() => {
            
            
            console.log('Execucao levou:' +  (Date.now() - dt) + 'milisegundos.')
            
        }));

    }
}